/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function calcular(operador1, operador2){
    console.log(operador1 + operador2, operador1 - operador2, operador1 * operador2, operador1 / operador2)
}

calcular(2, 3)

calcular2 = (op1, op2) => {
    console.log(op1 + op2, op1 - op2, op1 * op2, op1 / op2)
}

calcular2(5, 7)