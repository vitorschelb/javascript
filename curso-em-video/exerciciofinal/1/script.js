let num = document.querySelector ('input#fnum') //A variável num é o input de fnum
let lista = document.querySelector ('select#flista')
let res = document.querySelector ('div#res')
let valores = [] // Esse vetor vazio são os valores utilizados para analisar os dados, a análise dos dados é apartir do array criado dos inputs.

function isNumero(n) { //Essa função determina os valores aceitos na função onclick do adicionar
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //Essa função incrementa os valores aceitos, valores não iguais a -1. Rever aula sobre array.
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { 
        return false
    }
}

function adicionar() { //Essa function é o gatilho do Onclick para adicionar no select
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //Se o numero for realmente um numero e !NAO esta em lista
        valores.push(Number(num.value)) //Push adiciona um valor no vetor
        let item = document.createElement('option') //cria o item
        item.text = `Valor ${num.value} adicionado.` //texto que mostra junto ao item
        lista.appendChild(item) //adiciona o item na lista select
        res.innerHTML = ''
    } else {
       window.alert('Valor inválido ou já encontrado na lista.') 
    }
    num.value = '' //Junto com o focus limpa o campo ao der o onclick adicionar
    num.focus()
}

function finalizar() {
    if (valores.length == 0) { // se o lenght for 0, ou seja nada for adicionado
        window.alert ('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // cria a variavel tot com todos os valores ao clicar
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            else if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = '' //Recebe vazio para zerar o valor
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>` //é o que tem dentro, concatenado com a string adicionada.
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

