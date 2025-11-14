import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils/utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  // GET tasks
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/api/tasks/"),
  });

  return { isPending, isError, data };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();
  // PATCH a task
  const { mutate: editTask, isPending: isPendingEditTask } = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      // even if post has success, it won't automatically update our screen
      customFetch.patch(`/api/tasks/${taskId}`, { isDone: isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      // this is necessary to refresh the screen automatically
      console.log("success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { editTask, isPendingEditTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  // DELETE a task
  const { mutate: deleteTask, isPending: isPendingDeleteTask } = useMutation({
    mutationFn: ({ taskId }) =>
      // even if post has success, it won't automatically update our screen
      customFetch.delete(`/api/tasks/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      // this is necessary to refresh the screen automatically
      console.log("success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { deleteTask, isPendingDeleteTask };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  // POST a task
  // original name:alias
  const { mutate: createTask, isPending: isPendingCreateTask } = useMutation({
    mutationFn: (taskTitle) =>
      // even if post has success, it won't automatically update our screen
      customFetch.post("/api/tasks/", { title: taskTitle }),
    onSuccess: () => {
      // this is necessary to refresh the screen automatically
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task added");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });
  return { createTask, isPendingCreateTask };
};
