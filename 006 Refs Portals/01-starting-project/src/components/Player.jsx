import { useState, useRef } from "react";

export default function Player() {
  const userName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState();

  function handleClick() {
    setEnterPlayerName(userName.current.value);
    userName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={userName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
