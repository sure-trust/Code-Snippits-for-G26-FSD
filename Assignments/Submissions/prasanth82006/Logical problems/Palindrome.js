let a = "lol";
let count = -1;
let n = a.length;
let l;
if (n % 2 == 0) {
  l = n;
} else {
  l = n - 1;
}
for (let i = 0; i < n / 2; i++) {
  if (a.charAt(i) == a.charAt(n - i - 1)) {
    count += 1;
  }
}
if (count == l / 2) {
  console.log(`Given String ${a} is Palindrome`);
} else {
  console.log(`Given String ${a} is not a Palindrome`);
}
