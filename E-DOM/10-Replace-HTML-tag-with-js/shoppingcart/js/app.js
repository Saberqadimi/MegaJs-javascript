// Replace new element

// creating h2 tag
const h2 = document.createElement('h2')

// adding attribute to the new tag
h2.id = 'heading'
h2.classList.add('heading')
h2.appendChild(document.createTextNode('Javascript'))

// Replace new tag
const oldHeading = document.querySelector('#heading')
const parent = oldHeading.parentElement
parent.replaceChild(h2, oldHeading)

console.log(h2)
console.log(oldHeading)
console.log(parent)


//خودم

// create newElement
const h3 = document.createElement('h3');
h3.id = 'h3 replace on h2'
h3.appendChild(document.createTextNode('Saber Qadimi'))
h3.style.textAlign = 'center'
    // find parent h2 and after get h2 of parent
const hero = document.querySelector('.hero-content')
const child = hero.firstElementChild
    // replace h3 on h2 
hero.replaceChild(h3, child)
console.log(h3)
console.log(child)


//