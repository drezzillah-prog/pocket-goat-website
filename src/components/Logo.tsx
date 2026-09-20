export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-lockup" aria-label="Pocket Goat">
      <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path d="M18 21c3-8 8-12 14-12s11 4 14 12c4-3 8-4 11-2-2 7-6 12-12 14v11c0 7-5 12-13 12S19 51 19 44V33C13 31 9 26 7 19c3-2 7-1 11 2Z" />
        <path className="mark-cut" d="M25 31c2-2 4-3 7-3s5 1 7 3M26 40h12" />
      </svg>
      {!compact && <span className="brand-type">POCKET GOAT</span>}
    </span>
  );
}
