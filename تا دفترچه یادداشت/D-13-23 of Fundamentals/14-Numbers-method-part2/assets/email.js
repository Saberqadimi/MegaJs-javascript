// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');


// Event Listeners
eventListeners();

function eventListeners(){
    // App init
    document.addEventListener('DOMContentLoaded' , appInit);
    // Validate the Form
    email.addEventListener('blur' , validateField);
    subject.addEventListener('blur' , validateField);
    message.addEventListener('blur' , validateField);

    sendEmailForm.addEventListener('submit' , sendEmail)
    resetBtn.addEventListener('click' , resetFrom);

}

// Functions

// App initalization
function appInit(){
    // disable the send button on load
    sendBtn.disabled = true

}
function sendEmail(e){
    e.preventDefault();
    // show spinner
    const spinner= document.querySelector('#spinner');
    spinner.style.display = 'block';

    const sendEmailgif = document.createElement('img');
    sendEmailgif.src = 'img/mail.gif';
    sendEmailgif.style.display = 'none';
    //hide spinner after 5second then show second gif
    setTimeout(function() {
        spinner.style.display = 'none';
        document.querySelector('#loaders').appendChild(sendEmailgif);
        setTimeout(() => {
            sendEmailForm.reset();
        }, 5000);
        
    }, 3000);
}

// valide the vields
function validateField(){
    let errors;
    //validate the length the fields
    validateLength(this);
    if(this.type === 'email'){
        validateEmail(this);
    }
    errors = document.querySelectorAll('.error');

    if(email.value !=='' && subject.value !=='' && message.value !==''){
        if(errors.length === 0){
            sendBtn.disabled = false;
        }
    }

}
// validate the length of fields
function validateLength(field){
    if (field.value.length>0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
// Validate the email
function validateEmail(field){
    let emailText = field.value;
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
        
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function resetFrom(){
    sendEmailForm.reset();
}