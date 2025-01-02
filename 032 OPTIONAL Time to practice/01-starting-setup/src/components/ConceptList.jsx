export default function ConceptList({ concept }) {
  return (
    <li key={concept.name} className="concept">
      <img src={concept.image} alt={concept.title} />
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
    </li>
  );
}
