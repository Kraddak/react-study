import { useFetchTasks } from "./ReactQueryCustomHooks";
import SingleItem from "./SingleItem";

const Items = () => {
  const { isError, isPending, data } = useFetchTasks();
  //
  if (isPending) return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  //
  if (isError)
    return <p style={{ marginTop: "1rem" }}>There was an error...</p>;
  // if (error) return <p style={{ marginTop: "1rem" }}>{error.response.data}</p>;

  //
  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
