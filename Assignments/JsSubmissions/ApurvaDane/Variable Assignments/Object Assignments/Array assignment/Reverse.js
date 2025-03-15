
let strings = ["apple", "strawberry", "kiwi", "guava", "orange"];

let reversedStrings = [];
for (let i = strings.length - 1; i >= 0; i--) {
  reversedStrings.push(strings[i]);
}

console.log("Reversed array:", reversedStrings);