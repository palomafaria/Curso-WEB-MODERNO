const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(7.2)
imprimirResultado(6.8)
imprimirResultado('Epa!') //cuiudado