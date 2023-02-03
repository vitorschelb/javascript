// let n1=10
// let n2=11
// let res = n1 & n2
// console.log(res)


// Ele retorna 10 pois tem equivalência binária.
// 10 = 1010 11 = 1011

// 10 = 00001010
// 11 = 00001011

//      00001010 { Semelhante ao &&, 1+1=1 0+0=0 1+1=1 0+1=0}

// Usando o operador |, onde tiver o bit 1 recebe 1. Assim como & e ||, and e or.

// ^ é um OU Exclusivo. Ele só retorna 1, onde tiver 1. Se tiver equivalencia retorna 0, se não tiver equivalenciae tiver o bit 1 de 1. 

let n1=10
let res = n1 << 1 //Descolamento de bits para esquerda
