import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com"
});

export const getProducts = () => {
  return API.get("/products?limit=100");
};

export const getProductById = (id) => {
  return API.get(`/products/${id}`);
};