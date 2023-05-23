import ArtPieceDetails from "../../../components/ArtPieceDetails";
import { fetchArtPieceBySlug } from "@/lib/fetchArtPieces";

export default async function Page({ params }) {
  const { slug } = params;

  const piece = await fetchArtPieceBySlug(slug);
  console.log(piece);
  return (
    <>
      <header>
        <h1>{piece.name}</h1>
      </header>
      <ArtPieceDetails piece={piece} />
    </>
  );
}
