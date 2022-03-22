import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface FavoritesProps {
  pokemonIds: number[];
}

export const FavoritesPokemons: FC<FavoritesProps> = ({ pokemonIds }) => {
  return (
    <Grid.Container gap={2} direction={"row"} justify={"flex-start"}>
      {pokemonIds.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
