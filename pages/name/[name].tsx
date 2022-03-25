import { useState } from "react";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, NextPage } from "next";
import { GetStaticProps } from "next";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { PokemonListResponse, Pokemon } from "../../interfaces";
import { existInFavorites, getPokemonInfo, toggleFavorite } from "../../utils";
import confetti from "canvas-confetti";
import { Pokedex } from "../../components/pokedex";

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
      angle: 60,
      origin: { x: 0.3, y: 0.9 },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container>
        <Grid
          xs={12}
          sm={12}
          alignContent="center"
          justify="center"
          style={{ padding: "1rem" }}
        >
          <Pokedex
            pokemon={pokemon}
            handleFav={handleToggleFavorite}
            isInFav={isInFavorites}
          />
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
