import { products } from "./01-main.js";
import { ProductMemoryService } from "./services/product-memory.service.js";

const productService = new ProductMemoryService();

productService.createProduct({
  title: products[0].title,
  price: products[1].price,
  description: products[2].description,
  categoryId: products[0].category.id,
  images: products[1].images,
});

console.log(productService.products);

const productsArr = productService.products;
productService.updateProduct(productsArr[0].id, {
  title: 'cambiar nombre',
  price: 69420
})

console.log(productService.products);
