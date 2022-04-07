// Classes ids attributes
const link = document.querySelector('.link')
let element;
// classes
// classList
element = link.classList
element = link.className
    // add
link.classList.add('new-class')
    // remove
link.classList.remove('link')

// id
element = link.id
    // add
link.id = 'link'
    // remove
link.id = ''

// attriute function
// getAttribute
element = link.getAttribute('class')
    // setAttribute
element = link.setAttribute('id', 'newId')
    // hasAttribute
element = link.hasAttribute('target')

console.log(link)
console.log(element)