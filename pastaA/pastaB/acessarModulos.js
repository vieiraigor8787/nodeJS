const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req,res) => {
    res.write('buenosss')
    res.end()
}).listen(8080)

const c = require('./pastaC')
console.log(c.ola2)