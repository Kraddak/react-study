import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils/utils";
import { useDeleteTask, useEditTask } from "./ReactQueryCustomHooks";

const SingleItem = ({ item }) => {
  const { editTask, isPendingEditTask } = useEditTask();
  const { deleteTask, isPendingDeleteTask } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        disabled={isPendingEditTask}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={isPendingDeleteTask}
        onClick={() => deleteTask({ taskId: item.id })}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
