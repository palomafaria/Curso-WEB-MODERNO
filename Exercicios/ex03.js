/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

function calcular(base, expoente) {
    return Math.pow(base, expoente)
}
console.log(calcular(2, 9))

calcular2 = (base, expoente) => {
    return Math.pow(base, expoente)
}
console.log(calcular2(5, 6))