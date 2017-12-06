# Functional Negation

`neg` exports only one function that takes a `test` function and return a
negated one that will return true if `test` returns falsy and `false` otherwise

# Example

```js
const neg = require('neg');

const isOdd = x => x % 2;

const isEven = neg(isOdd);

console.log(isEven(2)); // returns true
console.log(isEven(1)); // returns false
```
