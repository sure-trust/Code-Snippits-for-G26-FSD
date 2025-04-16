document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const copyBtn = document.getElementById('copyBtn');
    const generateBtn = document.getElementById('generateBtn');
    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('lengthValue');
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    const charSets = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };
    const similarChars = 'il1Lo0O';
    lengthSlider.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    });
    generateBtn.addEventListener('click', function() {
        const length = parseInt(lengthSlider.value);
        const options = {
            uppercase: document.getElementById('uppercase').checked,
            lowercase: document.getElementById('lowercase').checked,
            numbers: document.getElementById('numbers').checked,
            symbols: document.getElementById('symbols').checked,
            excludeSimilar: document.getElementById('excludeSimilar').checked
        };
        if (!options.uppercase && !options.lowercase && !options.numbers && !options.symbols) {
            alert('Please select at least one character type!');
            return;
        }
        const password = generatePassword(length, options);
        passwordField.value = password;
        updateStrengthIndicator(password);
    });
    copyBtn.addEventListener('click', function() {
        if (!passwordField.value) return;
        passwordField.select();
        document.execCommand('copy');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
    function generatePassword(length, options) {
        let charset = '';
        
        if (options.uppercase) {
            charset += options.excludeSimilar 
                ? charSets.uppercase.replace(/[ILO]/g, '') 
                : charSets.uppercase;
        }
        
        if (options.lowercase) {
            charset += options.excludeSimilar 
                ? charSets.lowercase.replace(/[ilo]/g, '') 
                : charSets.lowercase;
        }
        
        if (options.numbers) {
            charset += options.excludeSimilar 
                ? charSets.numbers.replace(/[01]/g, '') 
                : charSets.numbers;
        }
        
        if (options.symbols) {
            charset += charSets.symbols;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        return password;
    }
    function updateStrengthIndicator(password) {
        let strength = 0;
        strength += Math.min(password.length / 4, 3);
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[^A-Za-z0-9]/.test(password);
        
        const varietyCount = [hasUpper, hasLower, hasNumber, hasSymbol].filter(Boolean).length;
        strength += (varietyCount - 1) * 1.5;
        strength = Math.min(Math.max(strength, 0), 10);
        const percentage = strength * 10;
        strengthBar.style.width = `${percentage}%`;
        
        if (percentage < 40) {
            strengthBar.className = 'h-2.5 rounded-full bg-red-500';
            strengthText.textContent = 'Weak';
        } else if (percentage < 70) {
            strengthBar.className = 'h-2.5 rounded-full bg-yellow-500';
            strengthText.textContent = 'Moderate';
        } else {
            strengthBar.className = 'h-2.5 rounded-full bg-green-500';
            strengthText.textContent = 'Strong';
        }
    }
    generateBtn.click();
});
