"use client";
import { useState } from "react";

export function QuietTable({ locale }: { locale: "ro" | "en" }) {
  const [mode, setMode] = useState<"quiet" | "open">("quiet");
  return (
    <div className={`quiet-table ${mode}`}>
      <div className="table-orbit" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
      <div className="table-wood" aria-hidden="true"><span className="root-line r1" /><span className="root-line r2" /><span className="root-line r3" /></div>
      <div className="table-controls" role="group" aria-label={locale === "ro" ? "Alege semnalul mesei" : "Choose table signal"}>
        <button aria-pressed={mode === "quiet"} className={mode === "quiet" ? "active" : ""} onClick={() => setMode("quiet")}>QUIET COMPANY</button>
        <button aria-pressed={mode === "open"} className={mode === "open" ? "active" : ""} onClick={() => setMode("open")}>OPEN TO CONVERSATION</button>
      </div>
      <p className="mode-note" aria-live="polite">
        {mode === "quiet"
          ? (locale === "ro" ? "Împreună, fără obligația conversației." : "Together, without the obligation to talk.")
          : (locale === "ro" ? "Un semn discret că o conversație este binevenită." : "A quiet signal that conversation is welcome.")}
      </p>
    </div>
  );
}
