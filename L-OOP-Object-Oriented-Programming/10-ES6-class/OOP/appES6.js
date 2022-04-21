// class

class Client {
    // constructor
    constructor(name , balance){
        this.name = name ,  
        this.balance = balance
    }

    // About the membership of Client
    membership() {
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

    // Get some information about Clients
    getClientInfo(){
        return `name: ${this.name}, balance: ${this.balance}, membership: ${this.membership()}`
    }
    
    // widraw some money
    widraw(amount){
        return this.balance -= amount
    }
    
    // deposit some money
    deposit(amount){
        return this.balance += amount
    }
    
}

let person1 = new Client ('mamareza', 2000)
let person2 = new Client ('ali', 200)

console.log(person1)