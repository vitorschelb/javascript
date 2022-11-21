var idade = 65
console.log (`Você em ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota`) //Crase usa quando tem interpolação, normal não precisa.
} else if (idade >= 16 || idade > 65) { //O && é um operador relacional
        console.log(`Voto opcional`)
    } else {
        console.log(`Voto obrigatório`)
    }