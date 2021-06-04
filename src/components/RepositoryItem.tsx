interface RepositoryProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export default function RepositoryItem({ repository }: RepositoryProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>Link para o repositorio</a>
    </li>
  );
}
