//
eventListeners()

const noteList = document.querySelector('#note-list')

function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newNote)
}


function newNote(e) {
    e.preventDefault()
    const text = document.querySelector('#note').value
        //create li tag

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(text))
        // console.log(text)
        //create removeBtn
    const removeBtn = document.createElement('a')
    removeBtn.textContent = 'X'
    removeBtn.classList = 'remove-note'
        // console.log(removeBtn)
    li.appendChild(removeBtn)
    noteList.appendChild(li)
    alert('create new task')

}

// variables
// const noteList = document.querySelector('#note-list')


// // eventlisteners
// eventlisteners()
//     // form submission
// function eventlisteners() {
//     document.querySelector('#form').addEventListener('submit', newNote)
// }


// // functions

// // Adding new note to the list
// function newNote(e) {
//     e.preventDefault()
//         // access to the value
//     const note = document.querySelector('#note').value

//     // create <li> tag
//     const li = document.createElement('li')




// }