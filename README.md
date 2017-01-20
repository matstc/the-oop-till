# The Task

Write object-oriented code to model a till.

The objects under test:

- The `Product` represents a product with an id, label, and price
- The `Catalog` lists all available products available at the shop
- The `Till` lists purchased products and generates bill


# How To Run

Simply run `yarn install` at the top-level to install the required modules.

Then run `jest` to run all tests.

All tests in `the-oop-till.test.js` should be made to pass. You can start with the first test at the top and make your way down. **Do not modify the tests**. You should be able to make them pass simply by fleshing out the code under test.


# Prototypal Inheritance

The code starts out using prototypal inheritance: you can just flesh out the function definitions and make judicious use of the `this` keyword.


# ES6 Classes

Once your tests are passing, convert your objects to ES6 class syntax. For example, a skeleton of the Product class would look like this:

```javascript
class Product {
  constructor(id, label, preTaxPrice){
  }

  getId(){
  }

  getPreTaxPrice(){
  }

  getLineItemDescription(){
  }
}
```

# Alternatives to Object-oriented Programming

Some consider constructor functions and classes an anti-pattern in JavaScript.

- How would you model the till without resorting to classes?
- How could [`Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) help you?
- The `Till` object needs the catalog to generate the bill. An alternative design would be to mix in the catalog functionality into the `Till` object. How would you do that?
