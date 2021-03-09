import RepositoryItem from "./RepositoryItem";

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        <RepositoryItem />
      </ul>
    </section>
  );
}
