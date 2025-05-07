const generated_password = document.querySelector("#generated_password")
const password_copy = document.querySelector("#password_copy")
const password_refresh = document.querySelector("#password_refresh")
const password_clear = document.querySelector("#password_clear")
const password_length_value = document.querySelector("#password_length_value")
const password_range_input = document.querySelector("#password_range_input")

const uppercase_check = document.querySelector("#uppercase")
const lowercase_check = document.querySelector("#lowercase")
const number_check = document.querySelector("#numbers")
const symbol_check = document.querySelector("#symbols")

const Uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase_letters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+-={}:<>?"

const characters = "";

password_range_input.value = 0;

password_range_input.addEventListener("click",()=>{
    password_length_value.innerHTML = password_range_input.value;
})

password_range_input.addEventListener("scroll",()=>{
    password_length_value.innerHTML = password_range_input.value;
})

// password_length_value.innerHTML.addEventListener("change",()=>{
//     password_range_input.value = password_length_value.textContent;
// })

const Generate_password_button = document.querySelector("#Generate_password_button")

Generate_password_button.addEventListener("click",()=>{
    console.log("clicked on Generate Password button")
    Generate_password_button_function();
});


// Click on the Refresh button
password_refresh.addEventListener("click",()=>{
    generated_password.innerText = ""
    Generate_password_button_function();
})

// Click on the password copy button
password_copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(generated_password.innerText)
    .then(() => alert("copied to the  clipboard"))
})

// Click on the clear button
password_clear.addEventListener("click",()=>{
    generated_password.innerText = ""
    password_range_input.value = 0
})

// Generate Password function
function Generate_password_button_function(){
    let password = "";
    let password_length = password_range_input.value;
    let use_uppercase = uppercase_check.checked;
    let use_lowercase = lowercase_check.checked;
    let use_numbers = number_check.checked;
    let use_symbols = symbol_check.checked;

    if(use_lowercase == false && use_uppercase == false && use_numbers == false && use_symbols == false){
        alert("Please select at least two options");
    }

    let characters = "";
    if(use_uppercase) characters += Uppercase_letters;
    if(use_lowercase) characters += lowercase_letters;
    if(use_numbers) characters += numbers;
    if(use_symbols) characters += symbols;

    for(let i = 0; i < password_length; i++){
        let random = Math.floor(Math.random() * characters.length);
        password += characters[random];
        }
        generated_password.innerText = password;
}


// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Error copying text: ", err));
}
