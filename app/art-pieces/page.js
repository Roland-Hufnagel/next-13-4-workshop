import ArtPieces from "@/components/ArtPieces";
import fetchArtPieces from "@/lib/fetchArtPieces";

export default async function Page() {
  const pieces = await fetchArtPieces();

  return (
    <>
      <header>
        <h1>Art Pieces</h1>
      </header>
      <ArtPieces pieces={pieces} />
    </>
  );
}
