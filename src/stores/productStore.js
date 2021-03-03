import products from "../Products.js";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class ProductStore {
  products = products;

  createProduct = (product) => {
    product.id = this.products[this.products.length - 1].id + 1;
    product.slug = slugify(product.name);
    this.products.push(product);
  };

  deleteProduct = (productId) => {
    this.products = this.products.filter((product) => product.id !== productId);
  };

  constructor() {
    makeObservable(this, {
      products: observable,
      createProduct: action,
    });
  }
}

const productStore = new ProductStore();
export default productStore;
