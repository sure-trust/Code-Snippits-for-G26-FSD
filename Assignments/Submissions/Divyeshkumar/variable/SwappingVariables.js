// Take two variables, a and b, with initial values. Swap their values without using a temporary variable. Print both variables.

var a=1;
var b=2;
a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);


// Output:
// 2
// 1