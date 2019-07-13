console.log(module.exports === this)
console.log(exports === module.exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Juca'
}

console.log(module.exports)

module.exports = { publico: true}