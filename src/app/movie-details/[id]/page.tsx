import { MovieDetails } from '@containers';

export default function MovieDetailsPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return <MovieDetails id={id} />;
}
