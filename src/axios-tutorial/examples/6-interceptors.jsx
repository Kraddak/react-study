import { useEffect } from "react";
import authFetch from "../interceptors";

const url = "https://www.course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      // wrong on purpose
      const resp1 = await authFetch("/react-store-productss");
      console.log(resp1);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
