import classes from "./Modal.module.css";

export default function Modal({ children, onclose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onclose} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}
