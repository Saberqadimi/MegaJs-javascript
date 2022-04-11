// Traversing from parent to children
let coursesList = document.querySelector('#courses-list').children[1].firstElementChild.firstElementChild.children[1].firstElementChild
coursesList.textContent = 'new megajs'
console.log(coursesList)
let textcard = document.querySelector('#courses-list').children[1].firstElementChild.firstElementChild.children[1].style.color = 'red'

console.log(textcard)