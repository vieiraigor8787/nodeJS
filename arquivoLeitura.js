const fs = require('fs')

const caminho = __dirname + '/arquivo.json' 

//sincrona ****CUIDADO****
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    // const config = conteudo
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})
//ou...
const config = require('./arquivo.json')
console.log('--vai ler antes do assincrona --> porta:', config.db.port)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta:', arquivos)
})