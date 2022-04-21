//variables
const noteList = document.querySelector('#note-list')


// eventlestiners 
eventlestiners()

function eventlestiners() {

    //get id form for submitiation 
    document.querySelector('#form').addEventListener('submit', newNote)

    //remove note in note-list
    document.querySelector('#note-list').addEventListener('click', removeNote)

    // get data from localstorage on loaded
    document.addEventListener('DOMContentLoaded', localStorageOnload)

}

//get value text for new note

function newNote(e) {
    e.preventDefault()

    const note = document.querySelector('#notewrite').value

    //create li tag for note
    const li = document.createElement('li')
    const div = document.createElement('div')
    div.classList = 'form-check'
    const lable = document.createElement('label')
    lable.classList = 'form-check-label'
    lable.appendChild(document.createTextNode(note))

    const iLable = document.createElement('i')
    iLable.classList = 'input-helper'

    // inside htmltag sort 
    lable.appendChild(iLable)
    div.appendChild(lable)
    li.appendChild(div)


    //create icon delete btn 
    const remove = document.createElement('i')

    remove.classList = 'remove remove-note mdi mdi-close-circle-outline'
    remove.style.color = 'red'
    li.appendChild(remove)
        // console.log(li)
    noteList.appendChild(li)

    this.reset()
    addNoteToLocalStorage(note)

}




function removeNote(e) {
    if (e.target.classList.contains('remove-note')) {
        e.target.parentElement.remove()
    } else {
        console.log('note in tag a')
    }
    // aslo remote the note from the Local Storage
    removeNoteLocalStorage(e.target.parentElement.children[0].firstElementChild.textContent)
        // console.log(d)
}


function addNoteToLocalStorage(note) {
    //get notes from localStorage
    const notes = getNotesFromLocalStorage()
        //add new task to the notes array
    notes.push(note)

    //add new task array to the localStorage
    localStorage.setItem('notes', JSON.stringify(notes))
}

// get notes from localStorage
function getNotesFromLocalStorage() {
    let notes;

    // get previous notes from localStorage
    let getFromLS = localStorage.getItem('notes');
    if (getFromLS === null) {
        // if not exist create empty array
        notes = []
    } else {
        // if exist convert to the array 
        notes = JSON.parse(getFromLS)
    }

    return notes
}


// get data from local storage on load
function localStorageOnload() {
    const notes = getNotesFromLocalStorage();

    // print each item of array
    notes.forEach(function(note) {
        //create li tag for note
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.classList = 'form-check'
        const lable = document.createElement('label')
        lable.classList = 'form-check-label'
        lable.appendChild(document.createTextNode(note))

        const iLable = document.createElement('i')
        iLable.classList = 'input-helper'

        // inside htmltag sort 
        lable.appendChild(iLable)
        div.appendChild(lable)
        li.appendChild(div)


        //create icon delete btn 
        const remove = document.createElement('i')

        remove.classList = 'remove remove-note mdi mdi-close-circle-outline'
        remove.style.color = 'red'
        li.appendChild(remove)
            // console.log(li)
        noteList.appendChild(li)
    });
}

// also Remove note from localStorage
function removeNoteLocalStorage(noteContent) {
    // delete X from the contetn
    const noteDelete = noteContent.substring(0, noteContent.length)

    // get notes from localstorage
    const notesFromLS = getNotesFromLocalStorage()

    notesFromLS.forEach(function(note, index) {
        if (note === noteDelete) {
            notesFromLS.splice(index, 1)
        }
    });

    // set new array of notes to the local storage
    localStorage.setItem('notes', JSON.stringify(notesFromLS))

}