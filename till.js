"use strict";

class Till {
  constructor(catalog, tax){
    this.catalog = catalog;
    this.tax = tax;
    this.productIds = [];
  }

  ringProduct(productId){
    this.productIds.push(productId);
  }

  formatPrice(price){
    return price.toFixed(2);
  }

  generateBill(){
    let products = this.productIds.map((id) => this.catalog.lookupProduct(id));
    let lineItems = products.map((product) => product.getLineItemDescription());
    let subtotal = products.reduce((total, product) => total + product.getPreTaxPrice(), 0);
    let tax = subtotal * this.tax;
    lineItems.push(`Subtotal:\t${this.formatPrice(subtotal)}`);
    lineItems.push(`Taxes:\t${this.formatPrice(tax)}`);
    lineItems.push(`Total:\t${this.formatPrice(subtotal + tax)}`);

    return lineItems.join("\n");
  }
}

module.exports = Till;
