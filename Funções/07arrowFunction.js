let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  //Return está implicito

console.log(dobro(Math.PI))

//***********************************************************

let ola = function() {
    return 'Olá'  
}
//Função sem parametro
ola = () => 'Olá'
//Função com parametro que pode ser ignorado
ola = _ => 'Olá'

console.log(ola())