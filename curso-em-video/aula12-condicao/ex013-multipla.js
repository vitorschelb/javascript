//Switch é uma EXPRESSÃO, não uma CONDIÇÃO
//CASE  Recebe um bloco
//Dentro de cada bloco é obrigatório colocar um BREAK
//Default é o padrão, se nenhum for satisfeito


//O switch vai testar uma expressão, vamos supor que o valor de o case2, então ele desvia o caminho dos outros e executa o comando. Então ele bate no BREAK e desvia para o final do bloco!

var agora = new Date()
var diaSem = agora.getDay() //JS começa a contar do domingo como 0

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Dia Invalido')
        break
}