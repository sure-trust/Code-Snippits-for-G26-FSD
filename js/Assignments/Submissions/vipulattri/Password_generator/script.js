function generatePassword() {
    var password = document.getElementById('input');
    password.value = ""; // Clear the previous value

    // Character sets
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = "!@#$%^&*()_+{}[]<>?,.";

    var selectedChars = "";
    
    // Check which checkboxes are selected
    if (document.getElementById('value1').checked) {
        selectedChars += lowercase;
    }
    if (document.getElementById('value2').checked) {
        selectedChars += uppercase;
    }
    if (document.getElementById('value3').checked) {
        selectedChars += numbers;
    }
    if (document.getElementById('value4').checked) {
        selectedChars += special;
    }

    if (selectedChars.length === 0) {
        console.log("Please select at least one option");
        password.value = "Select at least one option!";
        return;
    }

    var generatedPassword = "";
    var passwordLength = 10; // You can change the length

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * selectedChars.length);
          console.log(Math.random() * selectedChars.length);
        generatedPassword += selectedChars[randomIndex];
    }

    password.value = generatedPassword;
}
