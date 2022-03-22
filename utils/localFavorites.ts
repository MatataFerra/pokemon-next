const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((item) => item !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  /* implement only in client side */

  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites;
};

export { toggleFavorite, existInFavorites, pokemons };
