const color = document.querySelector("#color"); //Indica pra minha DIV vazia que vai aparecer o HEX
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const hexColors = generateHexColors();
  document.body.style.backgroundColor = hexColors[0];
  color.textContent = hexColors[0];
});

//Adiciona o evento de click no botão. Cria a constante que indica a função de gerar cores.
//O document.body seleciona o elemento HTML "body", ou seja, toda a página. A propriedade .style permite acessar o CSS do elemento body.  A propriedade .backgroundColor permite definir a cor de fundo no CSS. hexColor é o primeiro valor do array indicado na função a ser gerada a seguir.
//O color.textContet  atribui o calor da cor de hexColors à propriedade textContent do elemento color, no caso a DIV que vai aparecer o HEX. A propriedade textContent pode ser usada para definir ou obter o conteúdo do texto de um elemento, nesse caso do color, que vai ser o mesmo de hexColors, que indica para a função que vai gerar a cor.

function generateHexColors() {
const hexColors = [];
for (let i=0; i < 6; i++) {
  const hex = Math.floor(Math.random()*16).toString(16);
  hexColors.push(hex);
}
const color = "#" + hexColors.join("");
return [color, hexColors];
}

//Cria a constante hexColors vazia, ela esta escopada, então é diferente da de cima.
//O for, cri um loop que repete 6 vezes. Pq é hexadecimal. Sempre que i for = 0 ele inicia o loop e o faz enquanto i for menor que 6. Lembrando que: INICIALIZAÇÃO;CONDIÇÃO;CONTROLE. Ou seja, Inicia com i=0, enquanto i menor que 6, i soma mais 1 após a iteração. 
//A função a repetir segundo a condição for, gera um número hexadecimal de 0 a 15 e o converte em uma string hexadecimal.
//Math.random gera um numero aleatório entre 0 e 1. Multiplicado por 16, que vai ser sempre no máximo 15.9999, por que é entre 0 e 1, ou seja, 0,9999.
//math.floor arredonda essa operação para baixo, por isso, math.floor, "Joga para o chão". Garante que o número seja inteiro. 
//O .toString é uma função que serve para converter o valor em uma string. Como foi declarado 16, ele converte o numero em uma string hexadecimal que finalmente vai ser armazenada na variável hex. Se fosse 2, seria em binário, e assim por diante. Se fosse 36 que é o máximo, converteria pra base 36, ou seja as 26 letras +10 algarismos.
//Finalmente o .push vai empurrar o valor de hex gerado para o final de hexColors, como o for permite 6 vezes, ele empurra em ordem os 6 valores gerados.
//Então a constante color vai receber o # mais o ARRAY de hexColors gerado pela função, separados sem espaço. Todos juntos. O Array vai virar a string.
//Ele retorna um array com a string de color e o array de hexColors.