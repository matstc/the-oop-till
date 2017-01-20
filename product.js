"use strict";

class Product {
  constructor(id, label, preTaxPrice){
    this.id = id;
    this.label = label;
    this.preTaxPrice = preTaxPrice;
  }

  getId(){ return this.id }

  getPreTaxPrice(){ return this.preTaxPrice }

  getLineItemDescription(){
    return `${this.label}:\t${this.preTaxPrice.toFixed(2)}`;
  }
}

module.exports = Product;
