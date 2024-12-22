import { useState } from "react";

import Output from "./Output";

export default function Greetings() {
  const [changeText, setChangeText] = useState(false);

  const chnageTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>Its good to see you.</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={chnageTextHandler}>Change text!</button>
    </div>
  );
}
