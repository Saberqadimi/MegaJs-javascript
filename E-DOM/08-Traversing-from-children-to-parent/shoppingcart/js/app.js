// Traversing from children to parent

let price = document.querySelector('.price')

let output;
// children 
output = price.children[0]

// next sibling
output = price.nextElementSibling

// previous sibling
output = price.previousElementSibling

// parent
output = price.parentElement


console.log(output)