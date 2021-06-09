let valor //Não inicializada
console.log(valor) //(Valor não definido)
    //console.log(valor2) (Não foi declarado)

valor = null //Ausencia de valor
console.log(valor)
    //console.log(valor.toString()) 

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite atribuir undefined
console.log(!!produto.preco)
    //delete produto.preco
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)