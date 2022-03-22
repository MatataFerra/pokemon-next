import { Grid, Card } from "@nextui-org/react";
import { FC } from "react";
import { useRouter } from "next/router";

interface FavoritesCardProps {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<FavoritesCardProps> = ({ pokemonId }) => {
  const router = useRouter();

  const handleFavouriteClick = () => {
    router.push(`/pokemon/${pokemonId}`);
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
