import { useEffect } from "react";
import "./../global";
import axios from "axios";

const productsUrl = "https://www.course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios(productsUrl);
      console.log(resp1);
      const resp2 = await axios(randomUserUrl);
      console.log(resp2);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
