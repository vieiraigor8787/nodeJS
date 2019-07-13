require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita'
console.log(MinhaApp.nome) // aberto pra mudança, se o objeto no global nao for declarado como "freeze"