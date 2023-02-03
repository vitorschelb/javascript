// function canal() {
//     let n1 = 10
//     let n2 = 2
//     let res = n2*n1
//     return res //Ele sempre vai retornar para o operador, aquilo setado em return
// }

// let num=canal() //Armazenou o retorno da função em num. Ou seja, NUM APONTA PARA CANAL, CANAL APONTA PARA RES
// console.log(num) //Printa Num


function canal() {
    let n1 = 10
    let n2 = 2
    let res = 2*10
    if (res%2 == 0)
        return "Par"
    else
        return "Impar"
}

let res=canal()
console.log(res)