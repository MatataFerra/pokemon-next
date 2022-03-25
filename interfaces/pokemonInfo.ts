import { Sprites, Type } from "./pokemonFullInfo";

export interface PokemonInfo {
  name: string;
  id: number;
  sprites: Sprites;
  height: number;
  weight: number;
  types: Type[];
}
