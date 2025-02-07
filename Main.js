let x = document.querySelector("#logIn");
let y = document.querySelector("#signUp");
let z = document.querySelector("#btn");

function signup(){
    x.style.left = "-400px"
    y.style.left = "5px"
    z.style.left = "110px"
}

function login(){
    x.style.left = "5px"
    y.style.left = "450px"
    z.style.left = "0"
}

// login and sign up alert

let logInBtn = document.querySelector("#logInBtn");
let signUpBtn = document.querySelector("#signUpBtn");

function handleLogInBtn (){
    alert("Login successful!");
}

function handleSignUpBtn (){
    alert("Sign up successful!");
}

logInBtn.addEventListener("click", handleLogInBtn);
signUpBtn.addEventListener("click", handleSignUpBtn);
