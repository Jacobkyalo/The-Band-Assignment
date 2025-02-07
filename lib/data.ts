import { apiUrl } from "./axios";

export const getProducts = async () => {
  const { data } = await apiUrl.get("/products");
  return data;
};

export const getProduct = async (id: number | string) => {
  const { data } = await apiUrl.get(`/products/${id}`);
  return data;
};

export const deleteProduct = async (id: number | string) => {
  const { data } = await apiUrl.delete(`/products/${id}`);
  return data;
};

export const getCategories = async () => {
  const { data } = await apiUrl.get("/products/categories");
  return data;
};
