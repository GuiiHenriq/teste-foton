import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes"
});


export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
};