import { useState } from "react";
import duas from "../data/duas.json";

export default function DuaJar() {
  const [currentDua, setCurrentDua] = useState(null);

  function getRandomDua() {
    const index = Math.floor(Math.random() * duas.length);
    return duas[index];
  }

  function handleGetDua() {
    const dua = getRandomDua();
    setCurrentDua(dua);
  }

  return (
    <div>
      <button onClick={handleGetDua}>Get a Dua</button>

      {currentDua && (
        <div>
          <p>{currentDua.arabic}</p>
          <p>{currentDua.translation}</p>
          <small>{currentDua.reference}</small>
        </div>
      )}
    </div>
  );
}
