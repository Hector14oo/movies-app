import { Container_MovieDetails } from '@containers';

export default function MovieDetailsPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return <Container_MovieDetails id={id} />;
}
