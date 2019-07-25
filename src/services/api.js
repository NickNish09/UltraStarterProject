import axios from "axios";

// export const baseURL = "http://cgrcjr.herokuapp.com/";
// export const baseURL = "http://10.0.2.2:3000/";
export const baseURL = "http://192.168.1.131:3000/";

const api = axios.create({
  baseURL
});
export default api;
