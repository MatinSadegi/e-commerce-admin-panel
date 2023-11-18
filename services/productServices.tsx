import axios from "axios";
import { AttributesData, FormData } from "@/types/types";

export async function createProduct(newProduct: FormData) {
  await axios.post("http://localhost:5000/api/product", newProduct);
}

export async function getProducts() {
  const { data } = await axios.get("http://localhost:5000/api/product");
  return data;
}
export async function getProduct(slug: string) {
  const { data } = await axios.get(`http://localhost:5000/api/product/${slug}`);
  return data;
}

export async function deleteProduct(slug: string) {
  await axios.delete(`http://localhost:5000/api/product/${slug}`);
}

export async function addAttribute(attribute: AttributesData) {
  await axios.post("http://localhost:5000/api/attributes", attribute);
}

export async function getAttributes() {
  const { data } = await axios.get("http://localhost:5000/api/attributes");
  return data;
}

export async function deleteAttribute(name: string) {
  const response =await axios.delete(`http://localhost:5000/api/attributes/${name}`);
  return response
}
