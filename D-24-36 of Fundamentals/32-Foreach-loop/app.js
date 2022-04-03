// foreach Loop

let favoriteFruits = ['bannana', 'apple', 'orange', 'kiwi', 'strawbery'];

// for (let index = 0; index < favoriteFruits.length; index++) {
//     console.log(index, favoriteFruits[index])
// }

favoriteFruits.forEach(function(element , index) {
    console.log(`${index}: ${element}`)
});
