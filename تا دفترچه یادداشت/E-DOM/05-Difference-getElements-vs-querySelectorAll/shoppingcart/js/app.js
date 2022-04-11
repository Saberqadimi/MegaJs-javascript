// getElements vs querySelectorAll
let heading = document.getElementById('heading')
heading = document.querySelector('#heading')

let card = document.getElementsByClassName('card') // HTMLCollection
card = document.querySelectorAll('.card') // nodeList
    /**
     * برای اینکه دسترسی پیدا کنیم به اون کلاس یا ای دی یا تگ مورد نظر و بخوایم داخل 
     * حلقه فورایچ پیمایشش کنیم و یه کارایی بکنیم باید قبلش از 
     * queryselectorall
     * استفاده کنیم چون باید پوروتو اوت از نع 
     * nodeList باشه
     */
    // card.forEach(element => {
    //     element.remove()
    // });

// console.log(card)

let sixContent;
sixContent = document.querySelectorAll('.six')

sixContent.forEach(element => {
    element.style.color = 'red'
});
console.log(sixContent)