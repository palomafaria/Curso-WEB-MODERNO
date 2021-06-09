//pessoa -> 123 -> {...}
const pessoa = { nome: 'João' } //Constante são os atributos que compoe o objeto como por ex: nome, porem os valores que os atributos recebem podem ser alterados.
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //Impede que o objeto em si seja alterado

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)