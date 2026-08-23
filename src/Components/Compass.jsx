import "./Compass.css";

function Compass() {
  return (
    <svg
      className="compass"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <polygon
        points="50,4 58,42 96,50 58,58 50,96 42,58 4,50 42,42"
        className="compass__main"
      />

      <polygon
        points="50,24 57,43 76,50 57,57 50,76 43,57 24,50 43,43"
        className="compass__inner"
      />
    </svg>
  );
}

export default Compass;