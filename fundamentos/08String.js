const escola = "Cod3r"

//charAt retorna o caractere que está no indice passado no parenteses
console.log(escola.charAt(4))
console.log(escola.charAt(5))
    //charCodAt usado para pegar o valor na tabela ASC
console.log(escola.charCodeAt(3))
    //indexOf retorna o indice do caractere 3 na variável escola
console.log(escola.indexOf('3'))
    //substring vai pegar os valores adiantes ao indice passado
console.log(escola.substring(1))
    //Pegar o valor do 0 até o 3 sem pegar o 3
console.log(escola.substring(0, 3))
    //Concatenar
console.log('Escola'.concat(escola).concat('!'))
    //Troca o indice pelo valor informado
console.log(escola.replace(3, 'e'))

//Converter em array
console.log(('Ana, Maria, Pedro').split(','))