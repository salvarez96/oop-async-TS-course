import { Category } from "./category.model";

export interface Product extends Global {
  title:       string;
  price:       number;
  description: string;
  images:      string[];
  category:    Category;
}
