// factory - retorna nova instância(novo objeto)
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}