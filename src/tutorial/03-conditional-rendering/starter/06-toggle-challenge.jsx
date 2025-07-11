import { useState } from "react";

const ToggleChallenge = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {isActive && <div>Buongiorno... Che cosa vuoi dire?</div>}
      <button className="btn" onClick={() => setIsActive(!isActive)}>{`toggle ${
        isActive ? "on" : "off"
      }`}</button>
    </div>
  );
};

export default ToggleChallenge;

/*

      {isActive && <div>Buongiorno... Che cosa vuoi dire?</div>}
      <button onClick={setIsActive(!isActive)}>{`toggle ${
        isActive ? "on" : "off"
      }`}</button>
*/
