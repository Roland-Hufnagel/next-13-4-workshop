import { create } from "zustand";

export const useStore = create((set) => {
  return {
    favorites: [],
    toggleFavorite: (slug) => {
      set((state) => {
        if (state.favorites.includes(slug)) {
          const newFavorites = state.favorites.filter((favorite) => {
            return favorite !== slug;
          });
          return {
            favorites: newFavorites,
          };
        } else {
          const newFavorites = [...state.favorites, slug];
          return {
            favorites: newFavorites,
          };
        }
      });
    },
  };
  ("");
});
