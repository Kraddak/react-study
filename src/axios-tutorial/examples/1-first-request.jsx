import { useEffect } from "react";
// limit, if 429 wait for 15 min and try again
const url = "https://www.course-api.com/react-store-products";
import axios from "axios";

const fetchData = async () => {
  try {
    // axios.get(), axios.post(),axios.put(), axios.delete()
    const response = await axios(url);

    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};

const FirstRequest = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
