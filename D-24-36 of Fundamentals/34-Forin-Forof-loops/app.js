// For in & For of

// for in    object
let person = {
    name: 'mamareza',
    age: 21,
    job: 'JS developer'
}

// این برای آبجکت هاس
for (const key in person) {
    console.log(`${key}: ${person[key]}`)
}

// اینم برای آرایه ها
// for of    array
let favorit = ['bannana', 'apple', 'kiwi']
for (const element of favorit) {
    console.log(element)
}