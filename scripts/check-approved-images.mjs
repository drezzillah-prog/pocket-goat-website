import fs from "node:fs";

const targets = [
  "public/images/pocket-goat/penultimate/master.webp",
  "public/images/pocket-goat/penultimate/pockets-wall.webp",
  "public/images/pocket-goat/penultimate/pocket-detail.webp",
  "public/images/pocket-goat/penultimate/root-table.webp",
  "public/images/pocket-goat/books/books-hero.webp",
  "public/images/pocket-goat/books/books-recommendations.webp",
  "public/images/pocket-goat/books/books-dobrogea.webp",
  "public/images/pocket-goat/books/book-stack-real.webp",
];

function dimensions(buffer) {
  if (buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") {
    throw new Error("not a WebP");
  }

  const kind = buffer.toString("ascii", 12, 16);
  if (kind === "VP8X") {
    return {
      width: 1 + buffer[24] + (buffer[25] << 8) + (buffer[26] << 16),
      height: 1 + buffer[27] + (buffer[28] << 8) + (buffer[29] << 16),
    };
  }

  if (kind === "VP8 ") {
    for (let i = 20; i < Math.min(buffer.length - 7, 80); i += 1) {
      if (buffer[i] === 0x9d && buffer[i + 1] === 0x01 && buffer[i + 2] === 0x2a) {
        return {
          width: (buffer[i + 3] | (buffer[i + 4] << 8)) & 0x3fff,
          height: (buffer[i + 5] | (buffer[i + 6] << 8)) & 0x3fff,
        };
      }
    }
  }

  if (kind === "VP8L") {
    const b1 = buffer[21];
    const b2 = buffer[22];
    const b3 = buffer[23];
    const b4 = buffer[24];
    return {
      width: 1 + (((b2 & 0x3f) << 8) | b1),
      height: 1 + (((b4 & 0x0f) << 10) | (b3 << 2) | (b2 >> 6)),
    };
  }

  throw new Error(`unsupported WebP chunk: ${kind}`);
}

let failed = false;

for (const path of targets) {
  const buffer = fs.readFileSync(path);
  const { width, height } = dimensions(buffer);
  const ok = width >= 1400 && height >= 1000;

  console.log(`${ok ? "PASS" : "FAIL"} ${path}: ${width}×${height} · ${buffer.length} bytes`);
  if (!ok) failed = true;
}

if (failed) {
  console.error("Approved Pocket Goat photography fell below the visual-QA resolution floor.");
  process.exit(1);
}
