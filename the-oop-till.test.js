"use strict";

const Till = require('./till');
const Product = require('./product');
const Catalog = require('./catalog');

test('the product returns its price', () => {
  let sauce = new Product(1, 'Pasta sauce', 10);

  expect(sauce.getPreTaxPrice()).toBe(10);
});

test('the product returns its id', () => {
  let sauce = new Product(1, 'Pasta sauce', 10);

  expect(sauce.getId()).toBe(1);
});

test('it generates the line item information for a product', () => {
  let sauce = new Product(1, 'pasta sauce', 10);

  expect(sauce.getLineItemDescription()).toBe('pasta sauce:\t10.00');
});

test('it adds product to catalog', () => {
  let catalog = new Catalog();
  let sauce = new Product(1, 'pasta sauce', 20);
  catalog.addProduct(sauce);

  expect(catalog.size()).toBe(1);
});

test('it looks up a product by id in the catalog', () => {
  let catalog = new Catalog();
  let sauce = new Product(1, 'pasta sauce', 15);
  catalog.addProduct(sauce);

  expect(catalog.lookupProduct(sauce.getId())).toBe(sauce);
});

test('it generates a bill for the products purchased', () => {
  let catalog = new Catalog();
  catalog.addProduct(new Product(1, 'pasta sauce', 3));
  catalog.addProduct(new Product(2, 'zucchini', 6));
  catalog.addProduct(new Product(3, 'canelloni', 4));
  catalog.addProduct(new Product(4, 'mushrooms', 7));
  catalog.addProduct(new Product(5, 'peppers', 8));

  let till = new Till(catalog, 0.1);

  till.ringProduct(1);
  till.ringProduct(1);
  till.ringProduct(3);

  expect(till.generateBill()).toEqual(`pasta sauce:\t3.00
pasta sauce:\t3.00
canelloni:\t4.00
Subtotal:\t10.00
Taxes:\t1.00
Total:\t11.00`);
});
