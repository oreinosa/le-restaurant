import { Category } from './category';
export class Product {
  constructor(
    public _id?: string,
    public name?: string,
    public cost?: number,
    public price?: number,
    public imageURL?: string,
    public category?: Category
  ) { }
}
