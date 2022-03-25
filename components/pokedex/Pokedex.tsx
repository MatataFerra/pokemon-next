import React, { FC } from "react";
import { Lights } from "./Lights";
import { PokeScreen } from "./PokeScreen";
import { Panel } from "./Panel";
import { RightPanel } from "./RightPanel";
import { RightScreen } from "./RightScreen";
import { BackButtons } from "./BackButtons";
import styles from "./pokedex-right-panel.module.scss";
import { Pokemon } from "../../interfaces";

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

interface PokedexProps {
  pokemon: Pokemon;
  handleFav: () => void;
  isInFav: boolean;
}

export const Pokedex: FC<PokedexProps> = ({ pokemon, handleFav, isInFav }) => {
  return (
    <>
      <div style={stylesLeftPanel}>
        <Lights />
        <PokeScreen img={pokemon.sprites.front_default} />
        <Panel handleFav={handleFav} isInFav={isInFav} />
      </div>
      <div style={stylesRightPanel} className={styles.rightContainer}>
        <RightPanel />
        <RightScreen
          name={pokemon.name}
          height={pokemon.height}
          weight={pokemon.weight}
          types={pokemon.types}
        />
        <BackButtons />
      </div>
    </>
  );
};
