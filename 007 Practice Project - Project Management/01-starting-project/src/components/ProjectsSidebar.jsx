import Button from "./Button.jsx";

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold tracking-wider md:text-xl tet-stone-200">
        YOUR PROJECTS
      </h2>
      <Button onClick={onStartAddProject}>+ Add project</Button>
      <ul></ul>
    </aside>
  );
}
