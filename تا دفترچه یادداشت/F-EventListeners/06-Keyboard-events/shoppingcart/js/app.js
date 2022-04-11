// Typeof Events
const form = document.querySelector('#search')
const input = document.querySelector('#search-course')

// Form Events
// submit
// form.addEventListener('submit', printEvent)


// Input Events

// keydown
// input.addEventListener('keydown', printEvent)

// keyup
// input.addEventListener('keyup', printEvent)

// keypress
// input.addEventListener('keypress', printEvent)

// focus
// input.addEventListener('focus', printEvent)

// blur
// input.addEventListener('blur', printEvent)

// cut
// input.addEventListener('cut', printEvent)

// copy
// input.addEventListener('copy', printEvent)

// paste
input.addEventListener('paste', printEvent)


function printEvent(e){
    console.log(input.value)
    console.log(`THE EVENT IS: ${e.type}`)
}

// @megajs_admin
// name
// number
// email