import { Fragment } from "react";

export default function AddProject({ onChange }) {
  return (
    <main className="bg-zinc-900 text-white w-1/4 h-screen mt-16 rounded-r-3xl pt-28 pl-20">
      <h2 className="text-4xl font-bold tracking-wider">YOUR PROJECTS</h2>
      <button
        onClick={onChange}
        className="bg-stone-800 mt-12 px-10 py-5 text-2xl rounded-lg tracking-wide"
      >
        + Add project
      </button>
    </main>
  );
}
