// creating new element

// create element
let newLink = document.createElement('a');

//Set attributes
newLink.classList = 'link'
newLink.href = '#'
    // newLink.setAttribute('href', '#')

// adding child
newLink.appendChild(document.createTextNode('لینک جدید'))

//adding to HTML
document.querySelector('#primary').appendChild(newLink)


console.log(newLink)

/// تمرین خودم
let site = document.createElement('a');
site.className = 'link bg-dark'
site.href = '#'
site.appendChild(document.createTextNode('صابرقدیمی'))
let icon = document.createElement('i');
icon.className = 'fa fa-link text-red'
icon.style.color = 'red'
icon.appendChild(document.createTextNode(' آیکون'))
site.appendChild(icon)
document.querySelector('#secondary').appendChild(site)

console.log(site)
























//