//Arrays
//Strings
//Map
//Sets

const valores = [10,8,9,2,15,4,7,0]
const it_valores = valores[Symbol.iterator]()

const texto = "Youtube"
const it_texto = texto[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next())
console.log(it_valores.next().value)

console.log(texto)
console.log(it_texto.next())

