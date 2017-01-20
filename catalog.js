"use strict";

function Catalog(){
  this.products = {};
}

Catalog.prototype.addProduct = function(product){
  this.products[product.getId()] = product;
}

Catalog.prototype.lookupProduct = function(productId) {
  return this.products[productId];
}

Catalog.prototype.size = function(){
  return Object.keys(this.products).length;
}

module.exports = Catalog;
