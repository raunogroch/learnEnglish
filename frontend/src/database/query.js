import axios from "axios";

const query = axios.create({
  baseURL: "http://localhost:5000/api/dictionary/",
});

export default query;
