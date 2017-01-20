"use strict";

function Product(id, label, preTaxPrice){
  this.id = id;
  this.label = label;
  this.preTaxPrice = preTaxPrice;
}

Product.prototype.getId = function(){
  return this.id;
}

Product.prototype.getPreTaxPrice = function(){
  return this.preTaxPrice;
}

Product.prototype.getLineItemDescription = function(){
  return `${this.label}:\t${this.preTaxPrice.toFixed(2)}`;
}

module.exports = Product;
