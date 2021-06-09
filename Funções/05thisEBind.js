const pessoa = {
    suadacao: 'Bom dia',
    falar(){
        console.log(this.suadacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito enre paradigmas: funcional e Orientado a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()