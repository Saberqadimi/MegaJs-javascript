//
//(1)
eventlistener()

const noteList = document.querySelector('#note-list')
    //(2)
function eventlistener() {
    document.querySelector('#form').addEventListener('submit', newNote)
        //create evenlistener for delete note
    document.querySelector('#note-list').addEventListener('click', removeNote)

    // get data from localstorage on loaded
    document.addEventListener('DOMContentLoaded', localStorageOnload)

}

//(3)
// create new note 
function newNote(e) {
    e.preventDefault()
    const note = document.querySelector('#note').value
        // console.log(note)

    //create removebtn
    const removeBtn = document.createElement('a')
    removeBtn.textContent = 'X'
    removeBtn.classList = 'remove-note'
        //create li tag
    const li = document.createElement('li')

    li.appendChild(document.createTextNode(note))
    li.appendChild(removeBtn)

    noteList.appendChild(li)
        // console.log(li)

    this.reset()
    addNoteToLocalStorage(note)
}


// remove note in of list
//(4)
function removeNote(e) {
    if (e.target.classList.contains('remove-note')) {

        e.target.parentElement.remove()
    } else {
        console.log('note in tag a')
    }

    // console.log(e.target.parentElement.textContent)
    removeNoteLocalStorage(e.target.parentElement.textContent)


}


// (5)
//get notes frome localStorage
function addNoteToLocalStorage(note) {
    //get text from localStorage
    const notes = getNotesFromLocalStorage()

    //add new task to the notes array
    notes.push(note)

    //add new task array to the localStorage
    localStorage.setItem('notes', JSON.stringify(notes))

}

//(6)
//get text(notes) of localStorage 
function getNotesFromLocalStorage() {
    let notes;

    let getFromLS = localStorage.getItem('notes');
    //if notes !exist in localStorage return array[]
    if (getFromLS === null) {
        notes = []
    } else {

        //if exist note return all in string
        notes = JSON.parse(getFromLS)
    }
    return notes
}

//(7)
function localStorageOnload() {

    const notes = getNotesFromLocalStorage()

    notes.forEach(function(note) {

        //create removebtn
        const removeBtn = document.createElement('a')
        removeBtn.textContent = 'X'
        removeBtn.classList = 'remove-note'
            //create li tag
        const li = document.createElement('li')

        li.appendChild(document.createTextNode(note))
        li.appendChild(removeBtn)

        noteList.appendChild(li)
            // console.log(li)


    });


}

function removeNoteLocalStorage(noteContent) {
    //delete X from the content
    const noteDelete = noteContent.substring(0, noteContent.length - 1)
        // console.log(note)

    //get notes from localStorage
    const notesFromLS = getNotesFromLocalStorage()

    notesFromLS.forEach(function(note, index) {

        if (note === noteDelete) {

            console.log(index)
            notesFromLS.splice(0, 1)
        }

    });

    localStorage.setItem('notes', JSON.stringify(notesFromLS))
        // console.log(noteDelete)
        // console.log(notesFromLS)

}






//