import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
// import UserProgressContext from '../../store/UserProgressContext.jsx'

export default function ({ children, open, onClose, className = "" }) {
  // const userProgressCxt = useContext(UserProgressContext)
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
