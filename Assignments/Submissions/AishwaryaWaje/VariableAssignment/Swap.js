let a = 3,
  b = 7;
console.log('Before Swap: a =', a, ', b =', b);

a, (b = b), a;

console.log('After Swap: a =', a, ', b =', b);
