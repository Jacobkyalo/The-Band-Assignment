import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://fakestoreapi.com",
});
