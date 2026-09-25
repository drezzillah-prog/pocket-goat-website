export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-lockup" aria-label="Pocket Goat">
      <img
        className="brand-mark-img"
        src="/images/pocket-goat/brand/pocket-goat-mark.webp"
        alt=""
        aria-hidden="true"
      />
      {!compact && <span className="brand-type">POCKET GOAT</span>}
    </span>
  );
}
