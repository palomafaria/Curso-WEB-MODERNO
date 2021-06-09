/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function triangulo(a = 1, b = 1, c = 1) {
    if (a == 0 || b == 0 || c == 0 ){
        console.log('Os lados do triângulo precisam receber um valor maior que 0')
    }
    else if(a == b && b == c) {
        console.log('Equilátero')
    }else if ((a == b && b != c) || (a != b && b == c) || (a != b && a == c)) {
        console.log('Isóceles')
    }else {
        console.log('Escaleno')
    }
}

triangulo(10, 10, 10)
triangulo(5, 7, 5)
triangulo(5, 7, 9)
triangulo(6, 3, 0)

