let a = 10, b = 5;

console.log("=== Arithmetic ===");
console.log(a + b);  // Addition
console.log(a - b);  // Subtraction
console.log(a * b);  // Multiplication
console.log(a / b);  // Division
console.log(a % b);  // Modulus

console.log("=== Assignment ===");
let x = 5;
x += 2;
console.log(x);

console.log("=== Comparison ===");
console.log(a == b);   // false
console.log(a > b);    // true

console.log("=== Logical ===");
let p = true, q = false;
console.log(p && q);   // false
console.log(p || q);   // true

console.log("=== Bitwise ===");
console.log(a & b);    // 0
console.log(a | b);    // 15

console.log("=== Unary ===");
console.log(typeof a); // number
console.log(-a);       // -10

console.log("=== Ternary ===");
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

console.log("=== String ===");
let name = "John";
console.log("Hello " + name);

console.log("=== Type ===");
let arr = [1, 2, 3];
console.log(typeof arr);           // object
console.log(arr instanceof Array); // true
