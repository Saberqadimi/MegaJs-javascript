// map
let person = [
    {name: 'mamareza', fName: 'maghsoodi'},
    {name: 'akbar', fName: 'ahmadi'},
    {name: 'hamid', fName: 'alinia'},
    {name: 'amir', fName: 'ashrafi'}
]

person.forEach(function(element, index) {
    console.log(index , element)
});

person.map(function(element, index){
    console.log(index, element)
})



