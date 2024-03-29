import { FC } from "react";
import global from "./pokedex-global.module.scss";

const Line: FC = (props) => (
  <div>
    <svg
      height="100%"
      width="100%"
      style={{ height: "6rem" }}
      className={global.line}
      {...props}
    >
      <polyline
        points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
        style={{
          fill: "#0b0a0a",
          stroke: "none",
          strokeWidth: 3,
          transform: "scaleX(1.5)",
        }}
      />
      <polyline
        points="0,40 138,40 158,75 250,75"
        style={{
          fill: "none",
          stroke: "black",
          strokeWidth: 3,
          transform: "scaleX(1.5)",
        }}
      />
    </svg>
  </div>
);

export default Line;
