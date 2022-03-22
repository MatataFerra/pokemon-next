import { pokeApi } from "../api";
import { Pokemon, Sprites } from "../interfaces";

interface PokemonInfo {
  name: string;
  id: number;
  sprites: Sprites;
}

export const getPokemonInfo = async (param: string): Promise<PokemonInfo> => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${param}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
