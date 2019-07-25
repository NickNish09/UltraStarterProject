import axios from "axios";
export const baseURL = "http://192.168.1.131:3000/";

const api = axios.create({
  baseURL
});
export default api;
