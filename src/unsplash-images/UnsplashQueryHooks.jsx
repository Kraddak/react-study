import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./ContextUnsplash";

const apiKey = import.meta.env.VITE_API_KEY;
const url = `https://api.unsplash.com/search/photos?client_id=${apiKey}`;

export const queryActions = {
  fetchImages: "FETCH_IMAGES",
};

export const useFetchImages = () => {
  const { searchTerm } = useGlobalContext();
  const { isPending, data, isError } = useQuery({
    queryKey: [queryActions.fetchImages, searchTerm],
    queryFn: () => axios.get(`${url}&query=${searchTerm}`),
  });
  return { isPending, isError, data };
};
