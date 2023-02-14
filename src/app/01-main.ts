import axios from "axios";
import { Product } from "./models/product.model";

async function getProducts() {
  const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products?limit=3&offset=1');
  return data;
}

console.time('fetch data');
export const products = await getProducts();
products.forEach(item => console.log(item.title, item.price));
console.timeEnd('fetch data');
