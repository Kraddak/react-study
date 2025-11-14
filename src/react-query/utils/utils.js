import axios from "axios";

// const url = "http://localhost:5000/api/tasks";
const url = "http://localhost:5000";

const customFetch = axios.create({
  baseURL: url,
  headers: { Accept: "application/json" },
});

export default customFetch;
