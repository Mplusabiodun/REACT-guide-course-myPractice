import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onAdd }) {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDate = useRef();

  function handleSave() {
    const enteredTitle = projectTitle.current.value;
    const enteredDescription = projectDescription.current.value;
    const enteredProjectDate = projectDate.current.value;

    // validations

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredProjectDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-stone-800 tracking-wide hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="py-2 px-6 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <Input type="text" ref={projectTitle} label="TITLE" />
      <Input ref={projectDescription} label="DESCRIPTION" textarea />
      <Input type="date" ref={projectDate} label="DUE DATE" />
    </div>
  );
}
