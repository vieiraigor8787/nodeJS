const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //invocando função factory
const contadorD = require('./instanciaNova')()

contadorA.inc()//2 -> pois começa com 1
contadorA.inc()//3
console.log(contadorA.valor, contadorB.valor) //faz cache do objeto

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //novas instâncias devido a função factory