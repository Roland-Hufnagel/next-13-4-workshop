"use client";
import { useStore } from "@/lib/hooks/useStore";

import ArtPieces from "../ArtPieces";

export default function FavoriteArtPieces({ pieces }) {
  const favorites = useStore((state) => state.favorites);
  const filteredPieces = pieces.filter((piece) => {
    return favorites.includes(piece.slug);
  });
  console.log(filteredPieces, favorites);
  return <ArtPieces pieces={filteredPieces} />;
}
