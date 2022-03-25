import { Grid, Card } from "@nextui-org/react";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Pokemon } from "../../interfaces";
import { pokeApi } from "../../api";

interface FavoritesCardProps {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<FavoritesCardProps> = ({ pokemonId }) => {
  const router = useRouter();

  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    const fetchData = async (): Promise<string> => {
      const { data } = await pokeApi.get<Pokemon>(`/pokemon/${pokemonId}`);
      return data.name;
    };

    fetchData().then(setPokeName);
  }, [pokemonId]);

  const handleFavouriteClick = () => {
    router.push(`/name/${pokeName}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        hoverable
        clickable
        css={{ padding: 10 }}
        onClick={handleFavouriteClick}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={149}
        />
      </Card>
    </Grid>
  );
};
