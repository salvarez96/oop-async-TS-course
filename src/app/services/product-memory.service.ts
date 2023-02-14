import { faker } from "@faker-js/faker";
import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto";
import { Product } from "../models/product.model";
// import { BaseModel } from "../base.model";

// export const products: Product[] = [];

export class ProductMemoryService {
  private products: Product[] = [];

  createProduct(data: CreateProductDTO): Product {
    const newData: Product = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl()
      }
    }
    return this.add(newData);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  updateProduct(id: Product['id'], changes: UpdateProductDTO) {
    const productToChangeIndex = this.products.findIndex(product => product.id === id);
    const productToChange = this.products[productToChangeIndex];
    this.products[productToChangeIndex] = {
      ...productToChange,
      ...changes,
    };
    return this.products[productToChangeIndex];
  }

  findProduct(id: Product['id']) {
    return this.products.find(item => item.id === id);
  }
}


// export const getProductIndex = (id: Product['id']) => {
//   return products.findIndex(product => product.id === id);
// }

// export const findProducts = (dto: FindProductDTO): Product[] => {
//   // const productIndex = getProductIndex(id);
//   return products;
// }

// export const deleteProduct = (id: Product['id']) => {
//   const productToDelete = getProductIndex(id);
//   return products.splice(productToDelete, 1);
// }

