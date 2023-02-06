/* 
Exercise 4:

Write a JavaScript program to get the current date.
expected Output :

mm-dd-yyyy, mm/dd/yyyy, or dd-mm-yyyy, dd/mm/yyyy
*/


// const data = new Date()
// const n = data.toDateString()

// console.log('Data: ' + n)

// let minhaData = new Date()
// minhaData.toISOString().split('T')[0]

// console.log('Data: ' + minhaData)

const minhaData = (data = new Date()) => { //minhdaData (FUNÇÃO) // data (PARAMETRO) // new Date (FUNÇÃO QUE INDICA VALOR DO PARAMETRO)
    // {} (FUNÇÃO QUE VAI MODIFICAR O VALOR INDICADO NO PARAMETRO)
    const days = data.getDate()
    const months = data.getMonth()
    const years = data.getFullYear()
    return `${days}/${months}/${years}` //Template literals, você consegue passar variaveis dentro de crases.

}

console.log(minhaData())

let dataSimples = new Date();
console.log('Data: ' + dataSimples)