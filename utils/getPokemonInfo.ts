import { pokeApi } from "../api";
import { Pokemon, PokemonInfo } from "../interfaces";

export const getPokemonInfo = async (param: string): Promise<PokemonInfo> => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${param}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
    height: data.height,
    weight: data.weight,
    types: data.types,
  };
};
