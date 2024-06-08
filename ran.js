
const passwordBox= document.getElementById("Password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~}{[]></-=";

const allChar = upperCase + lowerCase + number +symbol;

function createPassword() {
    let password= "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random()* allChar.length)];
    }
    // passwordBox.value = password;
    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}



// document.addEventListener('DOMContentLoaded', function() {
//     function createPassword() {
//         const passwordField = document.getElementById('password');
//         if (passwordField) {
//             passwordField.value = 'newPassword123';
//         } else {
//             console.error('Password field not found');
//         }
//     }

//     function copyPassword() {
//         const passwordField = document.getElementById('passwordField');
//         if (passwordField) {
//             passwordField.select();
//             document.execCommand('copy');
//         } else {
//             console.error('Password field not found');
//         }
//     }

//     // Expose functions to the global scope
//     window.createPassword = createPassword;
//     window.copyPassword = copyPassword;
// });
