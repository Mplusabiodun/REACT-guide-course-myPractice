import noProject from "../assets/no-projects.png";

export default function ProjectDisplay({ onChange }) {
  return (
    <main className="text-center mx-auto">
      <img
        className="w-30 h-28 mx-auto mt-60"
        src={noProject}
        alt="no project"
      />
      <h3 className="text-5xl font-bold text-yellow-950">
        No Project Selected
      </h3>
      <p className="text-3xl font-bold opacity-60 text-yellow-950 mt-4">
        Select a project or get started with a new one
      </p>
      <button
        onClick={onChange}
        className="bg-stone-800 opacity-80 text-3xl text-white mt-12 px-10 py-5 rounded-lg tracking-wide"
      >
        Create new project
      </button>
    </main>
  );
}
