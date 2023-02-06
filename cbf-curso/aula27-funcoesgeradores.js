// A funcao geradora ela tem seu retorno adiado, até o momento que precisamos do seu retorno. Quando uma funcao normal é chamada, quem fica com o controle dela, é ela propria. Ela poupa processamento, é possível ir retornando coisas ao longo da função.

function* cores() {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)


function* perguntas() {
    const nome= yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return "Seu nome " + nome + ', seu esporte favorito é ' + esporte

}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Natação').value)


function* contador() {
    let i=0
    while(true) {
        yield i++
        if(i>5)
        break
    }
}

const itl=contador()
for(let c of itl) {
    console.log(c)
}


