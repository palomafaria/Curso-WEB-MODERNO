//Função sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //O segundo parametro é undefined
imprimirSoma(2, 3, 4, 5, 6, 7, 8) //Vai pegar só os dois primeiros
imprimirSoma() //NaN

//Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) //primeiro valor undefined