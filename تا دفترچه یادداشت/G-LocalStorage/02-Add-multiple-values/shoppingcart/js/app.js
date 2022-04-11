// add multiple value to a key in localStorage
let array = ['JS', 'React', 'Vuejs']



// localStorage.setItem('courses')

const stringArray = JSON.stringify(array)
const arrayArray = JSON.parse(stringArray)

console.log(arrayArray)
