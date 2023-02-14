import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

// export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'tags'>>>{
//   readonly tags: ReadonlyArray<Product['tags']>;
// }
