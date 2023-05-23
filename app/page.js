import Spotlight from "@/components/Spotlight";
import fetchArtPieces from "@/lib/fetchArtPieces";

export default async function Home() {
  const pieces = await fetchArtPieces();

  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h1>Random Art Piece</h1>
      <Spotlight piece={randomPiece} />
    </>
  );
}
