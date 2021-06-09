//Object.preventExtensions (Não pode aumentar a quantidade de atributos)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


//Object.seal (Não consegue add nem excluir atributos, apenas modificalos )
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = seldado +  valores constantes