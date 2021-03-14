const userNameDOM = document.getElementById('username');
const emailDOM = document.getElementById('email');
const passwordDOM = document.getElementById('password');
const rePasswordDOM = document.getElementById('re-password');
const agreeTerms = document.getElementById('agreeterms');
const checkboxClone = document.querySelector('.form__checkbox');
const checkIcon = document.querySelector('.form__checked');
const form = document.getElementById('form');
const successMessage = document.querySelector('.form__success');

const checkUsername = function() {
    const username = userNameDOM.value;
    let condition = 
    username.length >= 8 && 
    username.length <= 30 && 
    username.indexOf(' ') == -1;
    return condition;
}

const checkEmail = function() {
    const email = emailDOM.value;
    const mailFormat = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    return mailFormat.test(email);
}

const checkPassword = function(){
    const password = passwordDOM.value;
    let condition = 
    password.length >= 8 &&
    password.search(/[a-z]/) != -1 &&
    password.search(/[A-Z]/) != -1 &&
    password.search(/[0-9]/) != -1;
    return condition;
}

const checkRePassWord = function() {
    const password = passwordDOM.value;
    const rePassword = rePasswordDOM.value;
    return checkPassword() && password === rePassword;
}

const markValid = function(target){
    target.classList.remove('form__input--invalid');
    target.classList.add('form__input--valid');
    target.nextElementSibling.classList.add('hidden');
}

const markInvalid = function(target){
    target.classList.remove('form__input--valid');
    target.classList.add('form__input--invalid');
    target.nextElementSibling.classList.remove('hidden');
}

const checkMarkHideAndShow = function(){
    if (agreeTerms.checked) checkIcon.classList.remove('hidden')
    else checkIcon.classList.add('hidden');
    console.log(agreeTerms.checked);
}

userNameDOM.addEventListener('input', function(e){
    e.preventDefault();
    checkUsername() ? markValid(userNameDOM) : markInvalid(userNameDOM);
});

emailDOM.addEventListener('input', function(e){
    e.preventDefault();
    checkEmail() ? markValid(emailDOM) : markInvalid(emailDOM);
});

passwordDOM.addEventListener('input', function(e){
    e.preventDefault();
    checkPassword() ? markValid(passwordDOM) : markInvalid(passwordDOM);
});

rePasswordDOM.addEventListener('input', function(e){
    e.preventDefault();
    checkRePassWord() ? markValid(rePasswordDOM) : markInvalid(rePasswordDOM);
})

checkboxClone.addEventListener('click', function(){
    agreeTerms.checked = !agreeTerms.checked;
    checkMarkHideAndShow();
});

agreeTerms.addEventListener('change', checkMarkHideAndShow);

form.addEventListener('submit', function(){
    if (checkUsername() && checkEmail() && checkPassword() && checkRePassWord() && agreeTerms.checked) {
        successMessage.classList.remove('hidden');
    } else {
        successMessage.classList.add('hidden');
        checkUsername() ? markValid(userNameDOM) : markInvalid(userNameDOM);
        checkEmail() ? markValid(emailDOM) : markInvalid(emailDOM);
        checkPassword() ? markValid(passwordDOM) : markInvalid(passwordDOM);
        checkRePassWord() ? markValid(rePasswordDOM) : markInvalid(rePasswordDOM);
    }
})

