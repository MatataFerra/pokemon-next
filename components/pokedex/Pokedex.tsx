import React, { FC } from "react";
import { Lights } from "./Lights";
import { PokeScreen } from "./PokeScreen";
import { Panel } from "./Panel";
import { RightPanel } from "./RightPanel";
import { RightScreen } from "./RightScreen";
import { BackButtons } from "./BackButtons";
import styles from "./pokedex-right-panel.module.scss";
import global from "./pokedex-global.module.scss";
import { Pokemon } from "../../interfaces";

interface PokedexProps {
  pokemon: Pokemon;
  handleFav: () => void;
  isInFav: boolean;
}

export const Pokedex: FC<PokedexProps> = ({ pokemon, handleFav, isInFav }) => {
  return (
    <>
      <div className={global.stylesLeftPanel}>
        <Lights />
        <PokeScreen img={pokemon.sprites.front_default} />
        <Panel handleFav={handleFav} isInFav={isInFav} />
      </div>
      <div className={global.stylesRightPanel}>
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
