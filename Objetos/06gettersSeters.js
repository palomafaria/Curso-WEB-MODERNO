const sequencia = {
    _valor: 1, //Convenção
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //Quando eu tento atribuir um valor menor ao que ja foi atribuido, ele ignora
console.log(sequencia.valor, sequencia.valor)