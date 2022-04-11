// Functions Expression

// IIFE
// Imedeatly Invoked Functions Expression

(function(name){
    console.log('hello ' + name)
}('mamareza'))

let person = {
    name: 'akbar',
    age : 21,
    great : function(){
        return `hello ${this.name}`
    }
}

console.log(person.great())
