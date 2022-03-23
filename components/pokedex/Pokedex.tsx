import React from "react";
import { Lights } from "./Lights";
import { PokeScreen } from "./PokeScreen";
import { Panel } from "./Panel";
import { RightPanel } from "./RightPanel";
import { RightScreen } from "./RightScreen";
import { BackButtons } from "./BackButtons";

const stylesLeftPanel = {
  padding: "0",
  margin: "0",
  width: "25%",
  height: "33rem",
  backgroundColor: "#FE0065",
  border: "3px solid #000",
  borderRadius: "10px",
};

const stylesRightPanel = {
  padding: "0",
  margin: "0",
  width: "25%",
  height: "33rem",
  backgroundColor: "#FE0065",
  alignSelf: "flex-end",
  border: "3px solid #000",
  borderRadius: "10px",
};

export const Pokedex = () => {
  return (
    <>
      <div style={stylesLeftPanel}>
        <Lights />
        <PokeScreen />
        <Panel />
      </div>
      <div style={stylesRightPanel}>
        <RightPanel />
        <RightScreen />
        <BackButtons />
      </div>
    </>
  );
};
