console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('dentro de uma função, this é estritamente igual a exports?...', this === exports)
    console.log('dentro de uma função, this é estritamente igual a module.exports?...', this === module.exports)
    console.log('dentro de uma função, this é estritamente igual a global?...', this === global)
}
logThis()