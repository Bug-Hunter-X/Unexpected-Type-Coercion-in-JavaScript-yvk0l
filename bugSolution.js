function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error
  }
  return a + b;
}

console.log(foo(1, '1')); // Output: NaN

console.log(foo(1, 1)); // Output: 2

//Alternative using parseInt to convert to numbers
function bar(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(bar(1, '1')); //Output: 2