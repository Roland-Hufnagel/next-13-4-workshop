"use client";
import Image from "next/image.js";
import styles from "./index.module.css";
import { useStore } from "@/lib/hooks/useStore";

// This button is missing an onClick handler
export default function FavoriteButton({ slug, positionAbsolute = false }) {
  const toggleFavorite = useStore((state) => state.toggleFavorite);

  const favorites = useStore((state) => state.favorites);

  const isFavorite = favorites.includes(slug);

  return (
    <button
      onClick={() => toggleFavorite(slug)}
      className={`${styles.button} ${positionAbsolute ? styles.absolute : ""} ${
        isFavorite ? styles.favorite : ""
      }`}
      type="button"
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
