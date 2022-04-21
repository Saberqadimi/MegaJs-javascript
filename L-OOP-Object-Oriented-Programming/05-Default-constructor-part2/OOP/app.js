// OOP

// Object Constructor
let Client = function(name , balance){
    this.balance = balance,
    this.name = name,
    this.membership = function() {
        let name;
        if (this.balance > 1000) {
            name = 'gold'
        } else if (this.balance > 500){
            name = 'silver'
        } else {
            name = 'normal'
        }
        return name 
    }
}

let person1 = new Client ('mamareza', 2000)
let person2 = new Client ('ali', 200)


// string
const string1 = 'hamid' // string
const string2 = new String('hamid') // object

// number 
const number1 = 21; // number
const number2 = new Number(21) // object

// array
const array1 = [1,2,3,4,5]; // 3274y37y7858y8y7
const array2 = new Array(1,2,3,4,5) // 374y738y8r38yr3378

// function
const function1 = function(a,b){
    return a + b
}
const function2 = new Function('a', 'b', 'return a + b')



console.log(function1)
console.log(function2)