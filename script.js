const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const signInsubmitBtn = document.getElementById('signInSubmitbut');
const signInInputEmail = document.getElementById('signInEmailInput');
const signInInputPassword = document.getElementById('signInPasswordInput');

const signInEmailError = document.querySelector('.signInEmailError');
const signInPasswordError = document.querySelector('.signInPasswordError');

signInsubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (signInEmailValidate() && signInPasswordValidate()) {
        alert("Form submitted successfully");
        clearInputFields(signInInputEmail, signInInputPassword);
    }
});

function clearInputFields(...inputs) {
    inputs.forEach(input => input.value = '');
}

const signUpsubmitBtn = document.getElementById('signUpSubmitbut');
const signUpInputName = document.getElementById('signUpNameInput');
const signUpInputEmail = document.getElementById('signUpEmailInput');
const signUpInputPassword = document.getElementById('signUpPasswordInput');

const signUpNameError = document.querySelector('.signUpNameError');
const signUpEmailError = document.querySelector('.signUpEmailError');
const signUpPasswordError = document.querySelector('.signUpPasswordError');

signUpsubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateFullName() && signUpEmailValidate() && signUpPasswordValidate()) {
        alert("Form submitted successfully");
        clearInputFields(signUpInputName, signUpInputEmail, signUpInputPassword);
    }
});

function signInEmailValidate() {
    let email = signInInputEmail.value.trim();
    if (email === '') {
        signInEmailError.textContent = "Name is required";
        signInEmailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        signInEmailError.textContent = "Enter Valid Email";
        signInEmailError.previousElementSibling.classList.add('fa-xmark');
        return false
    }
    signInEmailError.innerHTML = "";
    signInEmailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function signInPasswordValidate() {
    let password = signInInputPassword.value.trim();

    if (password === '') {
        signInPasswordError.textContent = "Password is required";
        return false;
    }

    if (password.length < 8) {
        signInPasswordError.textContent = "Password must be at least 8 characters long";
        return false;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
        signInPasswordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
        return false;
    }

    signInPasswordError.textContent = "";
    return true;
}

function validateFullName() {
    let fullName = signUpInputName.value.trim();

    if (!fullName) {
        signUpNameError.textContent = "Full name is required";
        return false;
    }

    if (!/^[a-zA-Z\s'-]+$/.test(fullName)) {
        signUpNameError.textContent = "Invalid characters in full name";
        return false;
    }

    if (fullName.length < 3 || fullName.length > 50) {
        signUpNameError.textContent = "Full name must be between 3 and 50 characters";
        return false;
    }

    const words = fullName.split(/\s+/);
    if (words.length < 2 || words.length > 4) {
        signUpNameError.textContent = "Full name must contain 2 to 4 words";
        return false;
    }

    if (!/^([A-Z][a-z'-]+\s?)+$/.test(fullName)) {
        signUpNameError.textContent = "Full name must follow proper capitalization rules";
        return false;
    }
    signUpNameError.textContent = "";
    return true;
}

function signUpEmailValidate() {
    let email = signUpInputEmail.value.trim();
    if (email === '') {
        signUpEmailError.textContent = "Email is required";
        signUpEmailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        signUpEmailError.textContent = "Enter Valid Email";
        signUpEmailError.previousElementSibling.classList.add('fa-xmark');
        return false
    }
    signUpEmailError.innerHTML = "";
    signUpEmailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function signUpPasswordValidate() {
    let password = signUpInputPassword.value.trim();

    if (password === '') {
        signUpPasswordError.textContent = "Password is required";
        return false;
    }

    if (password.length < 8) {
        signUpPasswordError.textContent = "Password must be at least 8 characters long";
        return false;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
        signUpPasswordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
        return false;
    }
    
    signUpPasswordError.textContent = "";
    return true;
}


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    signInEmailError.innerHTML = "";
    signInPasswordError.textContent = "";
    clearInputFields(signInInputEmail, signInInputPassword);
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    signUpNameError.textContent = "";
    signUpEmailError.innerHTML = "";
    signUpPasswordError.textContent = "";
    clearInputFields(signUpInputName, signUpInputEmail, signUpInputPassword);
});
