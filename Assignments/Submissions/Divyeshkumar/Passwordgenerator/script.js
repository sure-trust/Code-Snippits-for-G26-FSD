function generatePassword() {
    var passwordLength = document.getElementById('passwordLength').value; // Get password length
    passwordLength = Math.min(Math.max(parseInt(passwordLength), 1), 100); // Ensure valid length
    var generatedPassword = ""; // Initialize generatedPassword variable
    updateStrengthIndicator(generatedPassword); // Update strength indicator after generating password

    var password = document.getElementById('input');
    password.value = ""; // Clear the previous value

    // Character sets
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = "!@#$%^&*()_+{}[]<>?,.";

    var selectedChars = "";
    var hasLower = false, hasUpper = false, hasNumber = false, hasSpecial = false; // Track character types

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

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * selectedChars.length);
        var char = selectedChars[randomIndex];
        generatedPassword += char;

        // Track if the character type is used
        if (document.getElementById('value1').checked && lowercase.includes(char)) hasLower = true;
        if (document.getElementById('value2').checked && uppercase.includes(char)) hasUpper = true;
        if (document.getElementById('value3').checked && numbers.includes(char)) hasNumber = true;
        if (document.getElementById('value4').checked && special.includes(char)) hasSpecial = true;
    }

    // Ensure at least one character from each selected category is included
    if ((document.getElementById('value1').checked && !hasLower) ||
        (document.getElementById('value2').checked && !hasUpper) ||
        (document.getElementById('value3').checked && !hasNumber) ||
        (document.getElementById('value4').checked && !hasSpecial)) {
        password.value = "Password must include selected character types!";
    } else {
        password.value = generatedPassword;
    }
}

function copyToClipboard() {
    var password = document.getElementById('input');
    password.select();
    document.execCommand('copy');
    alert("Password copied to clipboard!");
}
