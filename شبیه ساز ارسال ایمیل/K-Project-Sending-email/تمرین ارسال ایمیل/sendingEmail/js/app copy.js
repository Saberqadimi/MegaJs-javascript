//variables
const sendBtn = document.querySelector('#sendBtn'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message'),
    resetBtn = document.querySelector('#resetBtn'),
    form = document.querySelector('#email-form')



//eventListeners
eventListeners()

function eventListeners() {
    document.addEventListener('DOMContentLoaded', appInit)
    email.addEventListener('blur', validateField)
    subject.addEventListener('blur', validateField)
    message.addEventListener('blur', validateField)

    //reset form data with btn
    resetBtn.addEventListener('click', resetForm)
        //form submition
    form.addEventListener('submit', submitForm)


}


//functions

function appInit() {
    sendBtn.disabled = true
}

//validateField form input

function validateField() {

    validateLength(this)
        //validate input email
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

// validate length of fields
function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {

        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }
}

//validate input email
function validateEmail(field) {
    const emailText = field.value
    if (emailText.includes('@')) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }
}


//form submit 
function submitForm(e) {
    e.preventDefault()
    const spinner = document.getElementById('spinner')
    spinner.style.display = 'block'

    //make second gif
    const sendEmailImg = document.createElement('img')
    sendEmailImg.src = 'img/mail.gif'
    sendEmailImg.style.display = 'block'
        //show the email send gif(image)
    setTimeout(function() {
        //hide first spinner
        spinner.style.display = 'none'

        //append image in loaders
        const loaders = document.querySelector('#loaders')
        loaders.appendChild(sendEmailImg)

        //reset form and remove gif sendemail

        setTimeout(() => {
            resetForm()
            sendEmailImg.remove()
        }, 5000);
    }, 1500);

}

//reset foorm with btn
function resetForm() {
    form.reset()
}



















//