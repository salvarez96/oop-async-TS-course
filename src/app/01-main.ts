import axios from "axios";
import { Product } from "./models/product.model";

async function getProducts() {
  /* axios lets us type a get request using generics like so: */
  const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products?limit=3&offset=1');
  /* if we are upon a library that doesn't support strict typing, we can force types like so: */
  // const products = axiosResponse.data as Product[];
  /* here, we cast a value using 'as' to force type 'products'. This should only be used as last
  resort */
  return data;
}

console.time('fetch data');
const products = await getProducts();
products.forEach(item => console.log(item.title, item.price));
console.timeEnd('fetch data');
