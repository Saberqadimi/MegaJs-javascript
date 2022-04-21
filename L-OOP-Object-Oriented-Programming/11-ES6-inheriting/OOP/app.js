// OOP

// Object Constructor
let Client = function(name , balance){
    this.balance = balance,
    this.name = name
}

Client.prototype.membership = function() {
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



Client.prototype.getClientInfo = function(){
    return `name: ${this.name}, balance: ${this.balance}, membership: ${this.membership()}`
}

// widraw some money
Client.prototype.widraw = function(amount){
    return this.balance -= amount
}


// deposit some money
Client.prototype.deposit = function(amount){
    return this.balance += amount
}

let person1 = new Client ('mamareza', 2000)
let person2 = new Client ('ali', 200)



console.log(person1)
console.log(person1.getClientInfo())
console.log(person2)


person1.widraw(200)
person1.deposit(500)

console.log(person1.getClientInfo())

let Bussiness = function(name , balance, phone, category){
    Client.call(this, name , balance)
    this.phone = phone,
    this.category = category
}



Bussiness.prototype = Object.create(Client.prototype)

Bussiness.prototype.constructor = Bussiness

const bussiness1 = new Bussiness('mamareza', 20000000, 09120000000, 'Developer')


console.log(bussiness1)
console.log(bussiness1.getClientInfo())
