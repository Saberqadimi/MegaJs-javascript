//variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message'),
    resetBtn = document.querySelector('#resetBtn'),
    form = document.querySelector('#email-form')




//eventleteners
eventlisteners()

function eventlisteners() {

    document.addEventListener('DOMContentLoaded', appInit)
    email.addEventListener('blur', validateField)
    subject.addEventListener('blur', validateField)
    message.addEventListener('blur', validateField)

    resetBtn.addEventListener('click', resetForm)

}




//functions
function appInit() {

    sendBtn.disabled = true
}

function resetForm() {
    form.reset()

}

function validateField() {
    validateLength(this)

    if (this.type == 'email') {
        validateEmail(this)
    }

    let error = document.querySelectorAll('.error')
    if (email.value !== '' && subject.value !== '' && message.value !== '') {

        if (error.length === 0) {
            sendBtn.disabled = false

        }
    }

}


function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }

}


function validateEmail(email) {
    const emailText = email.value

    if (emailText.includes('@')) {
        email.style.borderBottomColor = 'green'
        email.classList.remove('error')

    } else {
        email.style.borderBottomColor = 'red'
        email.classList.add('error')
            // const er = document.createElement('p')

        // er.style.color = 'red'
        // er.textContent = 'ایمیل معتبر نیست'
        // email.after(er)
    }
}