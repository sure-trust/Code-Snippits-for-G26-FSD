
document.addEventListener("DOMContentLoaded", () => {
    const passwordOtp = document.querySelector(".password");
    const copy = document.querySelector(".copy");
    const rangeOtp = document.querySelector(".length span");
    const range = document.querySelector(".length input");
    const settings = document.querySelectorAll(".setting input");
    const generateBtn = document.querySelector(".generateBtn");

    const allCharacters = {
        Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        Lowercase: "abcdefghijklmnopqrstuvwxyz",
        Numbers: "0123456789",
        Symbols: "!@#$%^&*()_+[]{}|;:,.<>?~"
    };

    let length = parseInt(range.value);
    let selectedCharacters = "";

    function updateCharacterSet() {
        selectedCharacters = "";
        settings.forEach(setting => {
            if (setting.checked) {
                selectedCharacters += allCharacters[setting.id];
            }
        });
        console.log("Updated Characters:", selectedCharacters);
    }

    settings.forEach(setting => {
        setting.addEventListener("change", updateCharacterSet);
    });

    updateCharacterSet();

    range.addEventListener("input", () => {
        length = parseInt(range.value);
        rangeOtp.textContent = length;
    });

    generateBtn.addEventListener("click", () => {
        if (selectedCharacters.length === 0) {
            alert("Please select at least one character type!");
            return;
        }

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
            password += selectedCharacters[randomIndex];
        }

        console.log("Generated Password:", password);
        passwordOtp.textContent = password;
    });

    copy.addEventListener("click", () => {
        if (passwordOtp.textContent.trim() === "") {
            alert("No password to copy!");
            return;
        }
        navigator.clipboard.writeText(passwordOtp.textContent).then(() => {
            copy.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
            setTimeout(() => {
                copy.innerHTML = `<i class="fa-solid fa-clipboard"></i>`;
            }, 1500);
        }).catch(err => {
            console.error("Copy failed:", err);
        });
    });
});
