//O BREAK ele quebra a execução do programa, ele para o loop. ENCERRA.
//O CONTINUE, para somente a ITERAÇÃO ATUAL, a que ele está. Pula para PRÓXIMA iteração, ele CONTINUA. 

// let n= 0
// let max = 1000

// while (n<max) {
//     console.log("CFB Cusos - " + n)
//     if(n>10) {
//         break
//     }
//     n++
// }

// console.log("Fim do Programa")


let n= 0
let max=1000
let pares=0

for(let i=n;i<max;i++) {
    if(i%2!=0){
        continue
    }
    pares++
}


