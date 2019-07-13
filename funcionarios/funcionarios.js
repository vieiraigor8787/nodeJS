const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheresChinesas = f => f.pais === 'China' && f.genero === 'F'
const menorSalario = (funcionario, funcAtual) => {
    return funcionario.salario < funcAtual.salario ? funcionario : funcAtual
}

axios.get(url).then(response => {
    const func = response.data
    // console.log(func)

    // mulher chinesa com menor salário
    const funcionario = func
    .filter(mulheresChinesas)
    .reduce(menorSalario)
    console.log(funcionario)
})