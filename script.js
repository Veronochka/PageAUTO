/*часы, день недели, дата в футере*/
(function() {

    let clockElement = document.getElementById("clock");
    let locale = getLocale();

    function updateClock(clock) {
        let date = new Date();
        let options = { weekday: 'long' };
        clock.innerHTML =
            date.toLocaleTimeString() + '<br>' +
            new Intl.DateTimeFormat(locale, options).format(date) + '<br>' +
            date.toLocaleDateString();
    }
    /*определение локали пользователя*/
    function getLocale() {
        if (navigator.languages != undefined)
            return navigator.languages[0];
        else
            return navigator.language;
    }
    /*частота обновления часов 1 секунда*/
    setInterval(function() {
        updateClock(clockElement);
    }, 1000);

}());

/*обработка ошибок в полях ввода*/
let form = document.getElementsByTagName('form')[0];
let email = document.getElementById('inputemail');
let password = document.getElementById('inputpassword');
let emailerror = document.getElementById('inputemailerror');
let passworderror = document.getElementById('inputpassworderror');

email.addEventListener("input", function(event) {
    validateEmail();
}, false);

password.addEventListener("input", function(event) {
    validatePassword();
}, false);

form.addEventListener("submit", function(event) {
    validatePassword();
    validateEmail();
    event.preventDefault();
}, false);

// 
function validatePassword() {
    if (password.value.length < 6) {
        passworderror.innerHTML = "Должен содержать не менее 6 символов";
        passworderror.className = "error active";
    } else if (!(/[a-z]+/).test(password.value)) {
        passworderror.innerHTML = "Должен содержать прописные символы";
        passworderror.className = "error active";
    } else if (!(/[A-Z]+/).test(password.value)) {
        passworderror.innerHTML = "Должен содержать строчные символы";
        passworderror.className = "error active";
    } else if (!(/[0-9]+/).test(password.value)) {
        passworderror.innerHTML = "Должен содержать цифры";
        passworderror.className = "error active";
    } else if (!(/\W/).test(password.value)) {
        passworderror.innerHTML = "Должен содержать спецсимволы";
        passworderror.className = "error active";
    } else {
        passworderror.innerHTML = "";
        passworderror.className = "error";
    }
}

function validateEmail() {
    if (email.value) {
        emailerror.innerHTML = "";
        emailerror.className = "error";
    } else {
        emailerror.innerHTML = "Введите адрес электронной почты";
        emailerror.className = "error active";
    }
}