import axios from "axios";
export const baseURL = "http://localhost:3000/"; //MUDE AQUI

const api = axios.create({
  baseURL
});
export default api;
