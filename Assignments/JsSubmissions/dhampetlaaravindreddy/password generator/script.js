const characterSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const excludeSimilar = document.getElementById('excludeSimilar').checked;

    let chars = '';
    let selectedSets = [];

    if (includeUppercase) {
        let set = characterSets.uppercase;
        if (excludeSimilar) set = set.replace(/[IO]/g, '');
        chars += set;
        selectedSets.push(set);
    }
    if (includeLowercase) {
        let set = characterSets.lowercase;
        if (excludeSimilar) set = set.replace(/[l]/g, '');
        chars += set;
        selectedSets.push(set);
    }
    if (includeNumbers) {
        let set = characterSets.numbers;
        if (excludeSimilar) set = set.replace(/[01]/g, '');
        chars += set;
        selectedSets.push(set);
    }
    if (includeSymbols) {
        chars += characterSets.symbols;
        selectedSets.push(characterSets.symbols);
    }

    if (chars === '') {
        document.getElementById('error').style.display = 'block';
        return;
    }
    document.getElementById('error').style.display = 'none';

    let password = '';
    
    // Ensure at least one character from each selected set
    for (let set of selectedSets) {
        password += set[Math.floor(Math.random() * set.length)];
    }

    // Fill remaining characters
    for (let i = password.length; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    // Shuffle the password
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById('password').textContent = password;
    updateStrengthIndicator(password);
}

function updateStrengthIndicator(password) {
    let strength = 0;
    
    // Length contributes 25%
    strength += Math.min(password.length / 4, 25);
    
    // Character variety contributes up to 75%
    const varietyCount = [
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /[0-9]/.test(password),
        /[^A-Za-z0-9]/.test(password)
    ].filter(Boolean).length;

    strength += (varietyCount * 18.75);

    const strengthBar = document.getElementById('strengthBar');
    strengthBar.style.width = Math.min(strength, 100) + '%';

    if (strength < 40) {
        strengthBar.style.background = '#ff4444';
    } else if (strength < 70) {
        strengthBar.style.background = '#ffbb33';
    } else {
        strengthBar.style.background = '#00C851';
    }
}

function copyPassword() {
    const password = document.getElementById('password').textContent;
    if (password) {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    }
}

// Initial generation
generatePassword();