import { useRef } from "react";

export default function ProjectDetails({ onCancel, updateProject }) {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDate = useRef();

  return (
    <main className="pl-16 pr-52 mt-52">
      <div className="flex justify-end">
        <button
          onClick={onCancel}
          className="py-4 px-8 text-3xl text-zinc-900 tracking-wide mr-2 opacity-80 font-bold"
        >
          Cancel
        </button>
        <button
          onClick={updateProject(projectTitle, projectDescription, projectDate)}
          className="py-4 px-8 bg-zinc-900 text-3xl text-white rounded-xl opacity-90 font-mono"
        >
          Save
        </button>
      </div>
      <div>
        <label className="text-3xl text-zinc-900 tracking-wide font-bold opacity-70 block">
          TITLE
        </label>
        <input
          ref={projectTitle}
          className="bg-zinc-200 w-full h-16 opacity-70 text-2xl font-bold px-3 mt-4 mb-8 border-b-4 border-solid border-zinc-900"
          type="text"
        />
      </div>
      <div>
        <label
          htmlFor=""
          className="text-3xl text-zinc-900 tracking-wide font-bold opacity-70 block"
        >
          DESCRIPTION
        </label>
        <textarea
          ref={projectDescription}
          name=""
          id=""
          cols="30"
          rows="3"
          className="bg-zinc-200 w-full opacity-70 text-2xl font-bold px-3 mt-4 mb-8 pt-2 border-b-4 border-solid border-zinc-900"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor=""
          className="text-3xl text-zinc-900 tracking-wide font-bold opacity-70 block"
        >
          DUE DATE
        </label>
        <input
          ref={projectDate}
          type="date"
          name=""
          id=""
          className="bg-zinc-200 w-full h-16 opacity-70 text-2xl font-bold px-3 mt-4 mb-8 border-b-4 border-solid border-zinc-900"
        />
      </div>
    </main>
  );
}
