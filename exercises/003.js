"use strict"
/* 
Exercise 3:

Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
*/

// String.fromCharCode
//charCodeAt

const moveCharsForward = (string) => 
    string
    .split('') //O split fica aberto, para quebrar todos.
    .map(char => String.fromCharCode(char.charCodeAt(0)+ 1)) // Char é um parametro passado.
    //O String em verde é o CONSTRUTOR DO OBJETO

    console.log(moveCharsForward('Vitor Aiala Cascelli Schelb')) // Se eu colocar o espaço no split nesse caso, ele vai substituir apenas a primeira letra, por que a posição setada no charCodeAt é 0.
    

let text = "How are you doing today?";
const myArray = text.split(" "); // Aqui pode-se ver usando a função split com o ESPAÇO " ", ele quebra as palavras. Se for sem espaço quebra todos characters.
console.log(myArray)