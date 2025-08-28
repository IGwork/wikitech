import { useState } from "react";
import "./Join.css";

const Join = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`glass-button join ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      Join
    </div>
  );
};

export default Join;
