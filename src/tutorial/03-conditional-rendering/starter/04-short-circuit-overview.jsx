import { useState } from "react";

const ShortCircuitOverview = () => {
  const [v1, setV1] = useState("aaa");
  const [v2, setV2] = useState("");

  return (
    <div>
      <div>{` -> ${v1 && v2}`}</div>
      <div>{` -> ${v1 || v2}`}</div>
    </div>
  );
};
export default ShortCircuitOverview;
