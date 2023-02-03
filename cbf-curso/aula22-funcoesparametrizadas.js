//Uma função parametrizada significa uma função que você insere os parametros dentro da função

let valorPadrao = 0

function soma(n1=valorPadrao, n2=valorPadrao) {
    let res = n1 + n2
    return res
}

let resultado_soma = soma(5,10) // Aqui se deixar só 5, ele assume o valor padrão apontado lá em cima. Embaixo são os PARAMETROS. 5 e 10 são PARAMETROS.
// console.log(resultado_soma)


let valor = 0 
console.log(valor)

function add(v) {
    return valor+=v //x += y // x = x + y
}

valor = add(10)

console.log(valor)

valor = add(5)

console.log(valor)
