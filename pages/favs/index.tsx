import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { FavoritesPokemons, NoFavorites } from "../../components/ui";
import { useState, useEffect } from "react";
import { pokemons } from "../../utils";

const FavsPage: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemonIds={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavsPage;
