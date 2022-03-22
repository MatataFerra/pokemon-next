import { useState } from "react";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, NextPage } from "next";
import { GetStaticProps } from "next";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { PokemonListResponse, Pokemon } from "../../interfaces";
import { existInFavorites, getPokemonInfo, toggleFavorite } from "../../utils";
import confetti from "canvas-confetti";

interface PokemonPageByNameProps {
  pokemon: Pokemon;
}

const PokemonPageByName: NextPage<PokemonPageByNameProps> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    existInFavorites(pokemon.id)
  );

  const handleToggleFavorite = () => {
    toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 9999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { x: 1, y: 0 },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "https://via.placeholder.com/150"
                }
                alt={pokemon.name}
                width={"100%"}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color={"gradient"}
                ghost={!isInFavorites}
                onClick={handleToggleFavorite}
              >
                {!!isInFavorites ? "Remove from favorites" : "Add to favorites"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}> Sprites </Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokeNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokeNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };

  const pokemon = await getPokemonInfo(name);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPageByName;
