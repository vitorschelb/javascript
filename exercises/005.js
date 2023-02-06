/* 
Exercise 5:

Write a JavaScript program to creat a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.
*/

const minhaString = (string) => `New! ${string}`; //Aqui eu não estava conseguindo, pois tem de usar o Template Literals para passar o valor do parametro.
console.log(minhaString('Confira os filmes do Oscar!'))
const minhaStringCompleto = (string2) =>
string2.indexOf('New!') === 0 ? string2 : `New! ${string2}`;

//1. O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array. No caso NEW.
//2. Se NEW estiver na posição 0 indicada pela função indexOFF, ele indica o valor declarado.
//3. Sintaxe do ternário. CONDIÇÃO - VALOR 1 - VALOR2
//SE A POSIÇÃO 0 INDICADA PELA FUNÇÃO INDEXOF FOR NEW!*?* USE A STRING2, SE NÃO, USE O 'NEW! ${string2}'

//SINTAXE DA OPERAÇÃO TERNÁRIA: Teste lógico ? se verdadeiro : se falso

console.log(minhaStringCompleto('Confira os mais novos jogos', 'New! Confira os mais novos livros'))


//Parametros, argumentos, valores