import NewTask from "./NewTask.jsx";

export default function Task() {
  return (
    <section>
      <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
      <NewTask />
      <p className="text-stone-800 my-4">
        This project does not have any task yet
      </p>
      <ul></ul>
    </section>
  );
}
