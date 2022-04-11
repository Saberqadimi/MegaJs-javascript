// Date Object
let person = {
    name: 'mamareza',
    birth: 1999
}

const now = new Date().toLocaleString();
console.log(now)

output = now.getDay()
output = now.getMonth()
output = now.setFullYear(2025)
output = now.setHours(17)

const year = now.getFullYear()
let personAge = year - person.birth

console.log(now)
console.log(output)
console.log(personAge)

let names = ['saber', 'amir', 'ali', 'farhad', 'sam'];

names.forEach(function(value, key) {
    console.log(`${key} : ${value}`)
});

for (let index = 0; index < names.length; index++) {
    console.log(index, names[index])

}





























//