
function greet(name: string = 'Guest'): string {
  return `Hello, ${name}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet('John')); // "Hello, John!"