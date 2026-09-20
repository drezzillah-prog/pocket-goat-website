import fs from "node:fs/promises";

const [url, output = "qa-artifacts/home-ro-full.png", widthArg = "1440", heightArg = "1000"] = process.argv.slice(2);
if (!url) throw new Error("Usage: node scripts/capture-full.mjs <url> [output] [width] [height]");

const width = Number(widthArg);
const height = Number(heightArg);

const pages = await fetch("http://127.0.0.1:9222/json/list").then((r) => {
  if (!r.ok) throw new Error(`Chrome DevTools endpoint failed: ${r.status}`);
  return r.json();
});
const target = pages.find((page) => page.type === "page");
if (!target?.webSocketDebuggerUrl) throw new Error("No Chrome page target found.");

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});

let seq = 0;
const pending = new Map();
const eventWaiters = new Map();

ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
    return;
  }
  const waiters = eventWaiters.get(message.method);
  if (waiters?.length) {
    eventWaiters.delete(message.method);
    waiters.forEach((resolve) => resolve(message.params));
  }
});

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

function waitForEvent(method) {
  return new Promise((resolve) => {
    const waiters = eventWaiters.get(method) ?? [];
    waiters.push(resolve);
    eventWaiters.set(method, waiters);
  });
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: width <= 600
});

const loaded = waitForEvent("Page.loadEventFired");
await send("Page.navigate", { url });
await loaded;

await send("Runtime.evaluate", {
  expression: "document.fonts.ready.then(() => new Promise(resolve => setTimeout(resolve, 1200)))",
  awaitPromise: true
});

const metrics = await send("Page.getLayoutMetrics");
const content = metrics.cssContentSize ?? metrics.contentSize;
const screenshot = await send("Page.captureScreenshot", {
  format: "png",
  fromSurface: true,
  captureBeyondViewport: true,
  clip: {
    x: 0,
    y: 0,
    width: Math.ceil(content.width),
    height: Math.ceil(content.height),
    scale: 1
  }
});

await fs.writeFile(output, Buffer.from(screenshot.data, "base64"));
ws.close();
console.log(`Captured ${Math.ceil(content.width)}x${Math.ceil(content.height)} to ${output}`);
