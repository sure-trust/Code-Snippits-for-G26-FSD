function vowelCount(String) {
  let count = 0;
  let vowels = 'aeiou';
  for (char of String.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log('Number of Vowels: ', count);
}
vowelCount('Hello World');
vowelCount('Sure Trust');
vowelCount('Aishwarya');
