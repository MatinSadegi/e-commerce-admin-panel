import axios from "axios";
import { FormData } from "@/types/types";

export async function createProduct(newProduct: FormData) {
  await axios.post("http://localhost:5000/api/product", newProduct);
}

export async function getProducts() {
  const { data } = await axios.get("http://localhost:5000/api/product");
  return data;
}
