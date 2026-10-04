"use client";

import { useState } from "react";

export function QuietTable({ locale }: { locale: "ro" | "en" }) {
  const [mode, setMode] = useState<"quiet" | "open">("quiet");

  return (
    <div className={`quiet-table ${mode}`}>
      <div className="quiet-table-heading">
        <span>{locale === "ro" ? "LA LOCUL TĂU" : "AT YOUR SEAT"}</span>
        <p>{locale === "ro" ? "Un semnal discret. Nimic mai mult." : "A discreet signal. Nothing more."}</p>
      </div>

      <div className="table-plan" aria-hidden="true">
        <div className="table-plan-oval">
          <span className="table-root-line r1" />
          <span className="table-root-line r2" />
          <span className="table-root-line r3" />
          <span className="table-inlay">POCKET GOAT</span>
        </div>
        <span className="plan-seat s1" />
        <span className="plan-seat s2" />
        <span className="plan-seat s3" />
        <span className="plan-seat s4" />
        <span className="plan-seat s5" />
        <span className="plan-seat s6" />
      </div>

      <div className="table-controls" role="group" aria-label={locale === "ro" ? "Alege semnalul mesei" : "Choose table signal"}>
        <button
          type="button"
          aria-pressed={mode === "quiet"}
          className={mode === "quiet" ? "active" : ""}
          onClick={() => setMode("quiet")}
        >
          <small>{locale === "ro" ? "PREFER" : "PREFER"}</small>
          QUIET COMPANY
        </button>
        <button
          type="button"
          aria-pressed={mode === "open"}
          className={mode === "open" ? "active" : ""}
          onClick={() => setMode("open")}
        >
          <small>{locale === "ro" ? "SUNT DESCHIS" : "OPEN TO"}</small>
          CONVERSATION
        </button>
      </div>

      <p className="mode-note" aria-live="polite">
        {mode === "quiet"
          ? (locale === "ro" ? "Stai printre oameni, fără obligația conversației." : "Sit among people, without an obligation to talk.")
          : (locale === "ro" ? "Un semn mic că o conversație este binevenită." : "A small signal that conversation is welcome.")}
      </p>
    </div>
  );
}
