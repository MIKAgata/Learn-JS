const password = document.getElementById("password")

const length = document.getElementById("length")
const uppercase = document.getElementById("uppercase")
const number = document.getElementById("number")
const symbol = document.getElementById("symbol")

const strengthBar = document.getElementById("strength")
const strengthText = document.getElementById("strength-text")

password.addEventListener("input", () => {

let value = password.value
let score = 0

if(value.length >= 8){
length.textContent = "✔ Minimum 8 characters"
score++
}else{
length.textContent = "❌ Minimum 8 characters"
}


if(/[A-Z]/.test(value)){
uppercase.textContent = "✔ Uppercase letter"
score++
}else{
uppercase.textContent = "❌ Uppercase letter"
}

if(/[0-9]/.test(value)){
number.textContent = "✔ Number"
score++
}else{
number.textContent = "❌ Number"
}

if(/[^A-Za-z0-9]/.test(value)){
symbol.textContent = "✔ Special character"
score++
}else{
symbol.textContent = "❌ Special character"
}


if(score === 0){
strengthBar.style.width = "0%"
strengthText.textContent = ""
}

if(score === 1){
strengthBar.style.width = "25%"
strengthBar.style.background = "red"
strengthText.textContent = "Weak"
}

if(score === 2){
strengthBar.style.width = "50%"
strengthBar.style.background = "orange"
strengthText.textContent = "Medium"
}

if(score === 3){
strengthBar.style.width = "75%"
strengthBar.style.background = "yellow"
strengthText.textContent = "Strong"
}

if(score === 4){
strengthBar.style.width = "100%"
strengthBar.style.background = "lime"
strengthText.textContent = "Very Strong"
}

})