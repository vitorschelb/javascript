function tabuada() { //Variáveis dentro da função, por que é onclick, o padrão é 0, pois usuário não deu informação ao carregar o site.
    let num = document.getElementById('txtn') //Input do número
    let tab = document.getElementById('seltab')//Tabela da Tabuada
    if (num.value.length == 0) { //Se o valor da quantidade de caracteres for 0, ou seja, nada, alerta o usuário.
    window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //Converte a string de número para número real.
        let c = 1 //Cria a base do contador
        tab.innerHTML = '' //Limpa a tabela ao fazer outra conta. É colocada aqui, pois ele limpa antes de começar a tabuada, se não ele calculava e já limpava.
        while (c<=10) { //Condição, enquanto c é menor ou igual a 10 ele faz a função declarada.
            let item = document.createElement('option') //Cria o option dentro da tabela.
            item.text = `${n} x ${c} = ${n*c}` //O texto do option é a operação declarada. Declara a operação já no texto.
            item.value = `tab${c}`//Adiciona um valor em cada conta do item, caso seja necessário em outras coisas.
            tab.appendChild(item)//O pulo do gato, appendChild acrescenta um filho dentro de tab, que é justamente o item atribuído acima.
            c++ //Sempre soma mais um enquanto a condição for true, fazendo o fluxo da tabuada.
        }
    }
}