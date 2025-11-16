import axios from "axios";

// https://api.unsplash.com/search/photos?query=cat&client_id=C_AMMs_o7JDns6pc1Y82_biIpwS-nSmJVbTwfRBRbMI
// https://api.unsplash.com/search/photos?client_id=C_AMMs_o7JDns6pc1Y82_biIpwS-nSmJVbTwfRBRbMI&query=cat
const apiKey = "C_AMMs_o7JDns6pc1Y82_biIpwS-nSmJVbTwfRBRbMI";
const baseUrl = "https://api.unsplash.com/photos";
const defaultUrl = `${baseUrl}?client_id=${apiKey}`;

const customFetch = axios.create({
  baseURL: defaultUrl,
  // headers: { Accept: "application/json" },
});

export default customFetch;
