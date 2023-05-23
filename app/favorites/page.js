import FavoriteArtPieces from "@/components/FavoriteArtPieces";
import fetchArtPieces from "@/lib/fetchArtPieces";

export default async function Page() {
  const pieces = await fetchArtPieces();

  return (
    <>
      <header>
        <h1>Your favorite Art Pieces</h1>
      </header>

      <FavoriteArtPieces pieces={pieces} />
    </>
  );
}
