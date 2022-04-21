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

console.log(person1)
console.log(person2.membership())

