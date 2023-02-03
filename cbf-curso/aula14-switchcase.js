//A declração Switchcase, caso a expresão seja 1 ele executa case1, caso seja 2 vai no case2, caso seja 3, vai no case3, se não for nenhum, ele executa o DEFAULT.

let colocação = 6

switch(colocação) {
    case 1:
        console.log("Primeiro Lugar")
        break
    case 2:
        console.log("Segundo Lugar")
        break
    case 3: 
        console.log("Terceiro Lugar")
        break
    case 4: case 5: case 6:
        console.log("Prêmio de Participação")
        break
    default: 
        console.log("Parabéns por participar")
        break
}

