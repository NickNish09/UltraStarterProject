import axios from "axios";
export const baseURL = "http://192.168.1.152:3000/"; //MUDE AQUI

const api = axios.create({
  baseURL
});
export default api;
