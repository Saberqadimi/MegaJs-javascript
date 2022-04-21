// OOP 

//object Constructor
let Client = function(name, balance) {
    this.name = name,
        this.balance = balance

}
let person1 = new Client('saberqadimi', 60000)
let person2 = Client.prototype.membership = function() {
    let name;
    if (this.balance > 1000) {
        name = 'gold'
    } else if (this.balance > 500) {
        name = 'silver'
    } else {
        name = 'normal'
    }

    return name
}
console.log(person1)
console.log(person2)
    // console.log(person1.membership())


// Object Literals    // template literals  ``
// let clinet = {
//     name: 'mamareza',
//     balance: 1100,
//     membership: function() {
//         let name;
//         if (this.balance > 1000) {
//             name = 'gold'
//         } else if (this.balance > 500) {
//             name = 'silver'
//         } else {
//             name = 'normal'
//         }

//         return name
//     }
// }
// let clinet2 = {
//     name: 'ali',
//     balance: 1100,
//     membership: function() {
//         let name;
//         if (this.balance > 1000) {
//             name = 'gold'
//         } else if (this.balance > 500) {
//             name = 'silver'
//         } else {
//             name = 'normal'
//         }

//         return name
//     }
// }

// console.log(clinet)
// console.log(clinet.balance)
// console.log(clinet.membership())