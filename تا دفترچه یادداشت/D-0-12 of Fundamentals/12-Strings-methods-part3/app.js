// Strings Method
let learning = 'Monster Javascript Course'
let output;

// length
output = learning.length

// concat
output = learning.concat(',' , ' ' ,'on megajs')

// uppercase
output = learning.toUpperCase()

// lowercase
output = learning.toLocaleLowerCase()

// indexOf
output = learning.indexOf('@')

// includes
output = learning.includes('Monster')

// substring
output = learning.substring(0, 7)

// slice
output = learning.slice(8)

// split
output = learning.split(' ')

// replace
output = learning.replace(' ', '-')

// repeat
output = learning.repeat(10)


console.log(output)