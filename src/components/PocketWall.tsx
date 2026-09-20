const pockets = [
  ["Fern", "leaf"], ["Moon", "moon"], ["Oak", "acorn"], ["Fox", "tail"],
  ["Sage", "herb"], ["Map", "map"], ["Poet", "ink"], ["Dreamer", "star"]
];

export function PocketWall() {
  return (
    <div className="pocket-wall" aria-label="The eight Pocket reading alcoves">
      {pockets.map(([name, icon], index) => (
        <div className="pocket" key={name} style={{ ['--delay' as string]: `${index * 55}ms` }}>
          <div className="pocket-lamp"><span /></div>
          <div className="pocket-shelf"><i /><i /><i /></div>
          <div className="pocket-seat" />
          <div className="pocket-plaque"><small>{icon}</small>{name}</div>
        </div>
      ))}
    </div>
  );
}
