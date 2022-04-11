// Remove Elements

const links = document.querySelectorAll('#primary .link')
links[0].remove()
links[1].remove()

document.querySelector('#primary').remove()

console.log(links)