const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

//Com o let o prograa vai lembrar do valor que estava nos indices abaixo
funcs[2]()
funcs[8]()