import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [dataList , setDataList] = useState(data)

  const handleRemove = (toRemove) => {
    setDataList(dataList.filter((item) => item.id !== toRemove));
  }

  const handleDelete = () => {
    setDataList([]);
  }

  return <div>
    {dataList.map((item) => {
      return <div >
        <h2 id={item.id}>{item.name}</h2>
        <button className="btn" type="button" onClick={() => handleRemove(item.id)}>{`remove ${item.name}`}</button>
      </div>
    })}
    <button className="btn" type="button" onClick={handleDelete}>clear</button>
  </div>;
};

export default UseStateArray;
