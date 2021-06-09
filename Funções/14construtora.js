function Carro(velocidaeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //Metodo público
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidaeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidaeMaxima
        }
    }

    //Metodo público
    this.getVelocidadeAtual =  function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())