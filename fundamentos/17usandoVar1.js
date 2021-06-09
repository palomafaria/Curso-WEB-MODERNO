{
    {
        {
            {
                var sera = 'Será???' //Variável com escopo global, pois está fora da função
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
    //console.log(local) //Não está visível fora da função por questoes de escopo