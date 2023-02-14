import axios from "axios";

function delay(time: number) {
  /* in order to correctly type a Promise, we do it with primitive types just as soon as the
  promise is instantiated */
  const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('true')
    }, time);
  });
  return promise;
}

/* returns Promise<AxiosResponse<any, any>> */
function getProducts() {
  const promise = axios.get('https://api.escuelajs.co/api/v1/products?limit=3&offset=1');
  return promise;
}

/* returns Promise<any> */
async function getProductsV2() {
  const { data } = await axios.get('https://api.escuelajs.co/api/v1/products?limit=3&offset=1');
  return data;
}

console.time('start');
const rta = await delay(3000);
console.log(rta, rta.length);
getProducts().then(products => console.log(products.data));
console.timeEnd('start');
// delay(3000).then(response => console.log(response));
