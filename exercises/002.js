/* 
Exercise 2:

Write a JavaScript program to get the extension of a filename
*/

// O Slice "fatia" uma string ou um array, de acordo com o tamanho desejado.
//O lastIndexOf() vai retorna a ultima parte a partir do paramento setado. Junto com o slice, ele parte o nome a partir do que eu quero
const getFileExtension = (a) => a.slice(a.lastIndexOf('.'));

console.log(getFileExtension('index.html'))
console.log(getFileExtension('webpack.config.js'))