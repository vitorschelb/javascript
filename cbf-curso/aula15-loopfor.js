// Cada execução de loop, é uma ITERAÇÃO. Eles podem ser classificados como DEFINIDOS e INDEFINIDOS, ou seja, quando sabe a quantidade de iterações e quando não sabe.

//DEFINIDO -> "FOR" INDEFINIDO -> "WHILE" E "DO WHILE"

// PARA(INICIALIZAÇÃO;CONDIÇÃO;CONTROLE) { 
//   COMANDOS ITERADOS PELO LOOP 
// }

console.log("Inicio do Programa")
for(let i=0;i<100;i++) {
    if(i%2==0) {
        console.log(i + " é par")
    }else {
        console.log(i + " é ímpar")
    }
}

console.log("Fim do Programa")