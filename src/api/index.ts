require("dotenv").config();

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchData = async () => {
  let url = `${API_URL}&appid=${API_KEY}&cnt=40`;
  return await (await fetch(url)).json();
};
