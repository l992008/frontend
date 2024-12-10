const modal = document.getElementById("my-modal");
const span = document.getElementsByClassName("btn-close")[0];
modal.addEventListener("submit", sendForm)

document.querySelectorAll('.openModalBtn').forEach(btn => {
    btn.addEventListener('click', handleClick);
});

function handleClick() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const reRU = /^(\+7|7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    const reUS = /^(?:\+1|1)?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const reEN = /^(\+44|0)?\s?\(?\d{4}\)?[\s.-]?\d{3}[\s.-]?\d{3}$/;
    const reGER = /^(\+49|0)?\s?\(?\d{3,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{4}$/;
    return reRU.test(phoneNumber) || reUS.test(phoneNumber) || reEN.test(phoneNumber) || reGER.test(phoneNumber);
}

function sendForm(event)
{
    var form = document.getElementById("my-form");
    event.preventDefault();
    var name = form.name.value;
    var email = form.email.value;
    var phone = form.phone.value;

    if (name.trim().split(" ").length < 3) {
        alert("Введите имя корректно");
    }
    else if (!validateEmail(email)) {
        alert("Введите e-mail корректно");
    }
    else if (!validatePhoneNumber(phone)) {
        alert("Введите номер телефона корректно");
    }
    else {
        modal.style.display = "none";
        form.reset();
        alert("Форма успешно отправлена");
    }
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

