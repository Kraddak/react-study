import { useEffect, useState } from "react";

const SecondComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // some logic
      console.log("some logic");
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);

  return <div>second component</div>;
};

const CleanupFunction = () => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <div>
      {shouldShow && <SecondComponent></SecondComponent>}
      <button
        onClick={() => {
          setShouldShow(!shouldShow);
        }}
      >{`toggle: ${shouldShow ? "on" : "off"}`}</button>
    </div>
  );
};

export default CleanupFunction;
