"use strict";

class Catalog {
  constructor(){
    this.products = {};
  }

  addProduct(product){
    this.products[product.getId()] = product;
  }

  lookupProduct(productId) {
    return this.products[productId];
  }

  size(){
    return Object.keys(this.products).length;
  }
}

module.exports = Catalog;
