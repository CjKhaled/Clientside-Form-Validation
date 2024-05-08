const email = document.querySelector('#email')
const emailError = document.querySelector('.error.email')
const country = document.querySelector('#country')
const countryError = document.querySelector('.error.country')
const zipcode = document.querySelector('#zipcode')
const zipcodeError = document.querySelector('.error.zipcode')
const password = document.querySelector('#password')
const passwordError = document.querySelector('.error.password')
const password2 = document.querySelector('#password2')
const password2Error = document.querySelector('.error.password2')
const formSubmit = document.querySelector('.submit-btn')

function updateError(input, error) {
    let valid = true;
    if (input.validity.tooShort || input.value.length == 0) {
        error.innerHTML = 'Not enough characters.'
        input.className = 'invalid'
        valid = false;
    } else if (input.validity.patternMismatch && input.id == 'email') {
        error.innerHTML = 'Input a valid email.'
        input.className = 'invalid'
        valid = false;
    } else if (input.validity.patternMismatch && input.id == 'zipcode') {
        error.innerHTML = 'Invalid zipcode.'
        input.className = 'invalid'
        valid = false;
    } else if (input.id == 'password2' && input.value !== password.value) {
        error.innerHTML = 'Passwords do not match.'
        input.className = 'invalid'
        valid = false;
    } else if (valid) {
        error.innerHTML = '';
        input.className = 'valid'
    }
}


formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
})

email.addEventListener('input', () => {
    updateError(email, emailError)
})

country.addEventListener('input', () => {
    updateError(country, countryError);
})

zipcode.addEventListener('input', (e) => {
    updateError(zipcode, zipcodeError)
})

password.addEventListener('input', () => {
    updateError(password, passwordError)
})

password2.addEventListener('input', () => {
    updateError(password2, password2Error)
})