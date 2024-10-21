import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const dialog = useRef();

  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDate = useRef();

  function handleSave() {
    const enteredTitle = projectTitle.current.value;
    const enteredDescription = projectDescription.current.value;
    const enteredProjectDate = projectDate.current.value;

    // validations
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredProjectDate.trim() === ""
    ) {
      dialog.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredProjectDate,
    });
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption="Okay">
        <h2 className="text-xl font-bold my-4 text-stone-700">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oopss... Looks like you forget to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you enter a valid value for every input filed
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className=" text-stone-800 tracking-wide hover:text-stone-950"
            >
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
    </>
  );
}
