import noProject from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function ProjectDisplay({ onStartAddProject }) {
  return (
    <div className="text-center mt-24 w-2/3">
      <img
        className="w-16 h-16 mx-auto object-contain"
        src={noProject}
        alt="no project"
      />
      <h2 className="text-xl font-bold my-4 text-stone-500">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
