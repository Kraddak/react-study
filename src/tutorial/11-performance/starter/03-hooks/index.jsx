import { useCallback, useState } from "react";
import { data } from "../../../../data";
import List from "./List";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  // This function is recreated at every rerendered
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const memoizedRemovePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      {/* RemovePerson is recreated => List must rerender! (even if nothing has changed!) */}
      <List people={people} removePerson={memoizedRemovePerson} />
    </section>
  );
};
export default LowerState;
