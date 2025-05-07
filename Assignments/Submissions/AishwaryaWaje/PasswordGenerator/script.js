function GeneratePassword() {
  let uppercase = document.getElementById('uppercase').checked;
  let lowercase = document.getElementById('lowercase').checked;
  let numbers = document.getElementById('numbers').checked;
  let symbol = document.getElementById('splChar').checked;

  let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  let numChars = '1234567890';
  let specialChars = '!@#$%&<>?^*+_-.,|';

  let allChars = '';
  if (uppercase) {
    allChars += upperChars;
  }
  if (lowercase) {
    allChars += lowerChars;
  }
  if (numbers) {
    allChars += numChars;
  }
  if (symbol) {
    allChars += specialChars;
  }
  if (allChars === '') {
    alert('Please select at least one option!');
    return;
  }

  let passwordLength = parseInt(document.getElementById('length').value);
  if (passwordLength < 4) {
    alert('Please enter a valid password length');
    return;
  }
  if (isNaN(passwordLength)) {
    alert('Please enter a length');
    return;
  }

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById('password').value = password;
}
function CopyPassword() {
  let passField = document.getElementById('password');
  if (passField.value === '') {
    alert('No password generated to copy');
    return;
  }
  passField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}
function RefreshPassword() {
  document.getElementById('password').value = '';
  document.getElementById('length').value = '';
  document.getElementById('uppercase').checked = false;
  document.getElementById('lowercase').checked = false;
  document.getElementById('numbers').checked = false;
  document.getElementById('splChar').checked = false;
}
