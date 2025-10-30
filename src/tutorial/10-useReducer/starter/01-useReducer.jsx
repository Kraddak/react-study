import { React, useReducer } from "react";
import { data } from "../../../data";

const defaultState = {
  people: data,
};

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] };
    case RESET_LIST:
      return { ...state, people: data };
    case REMOVE_ITEM:
      return {
        ...state,
        people: state.people.filter(
          (person) => person.id !== action.payload.id
        ),
      };
    default:
      // return state;
      throw new Error(`No matching ${action.type} - action type`);
  }
};

const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const resetItems = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  };
  const clearItems = () => {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST });
  };
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length <= 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetItems}
        >
          reset items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
