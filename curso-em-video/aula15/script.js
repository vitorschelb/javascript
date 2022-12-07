//Variáveis compostas.
//Um array é um vetor composto por índices e elementos que abrigam valores.

let num = [5, 8, 4]
num[3] = 6 //Ele substitui se o elemento estiver já com valor declarado
num.sort() // Organiza todos os elemento de maneira crescente
num.push(1) //Ele cria o elemento necessário, ele enfia na ultima posição
//A ordem entre o sort e o Push influênciam, a lógica segue o fluxo das linhas escritas.
num.length //Para saber o cumprimento de um array, ele é um atributo

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso primeiro valor do vetor é ${num[0]}, é bom lembrar que sempre começa na posição 0.`)


console.log(`Os valores contidos nesse vetor são:`)
    for(let pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos}, tem o valor ${num[pos]}`)
    } 
    //inicialização, teste lógico e incremento. Solução prática de printar todos elementos de um vetor na tela, percurso em vetores.

for(let pos in num) {
    console.log(num[pos])
}
//Forma prática de apresentar o percurso de um vetor

num.indexOf() // É a pesquisa do valor do elemento, se não tiver ele volta o valor -1 até achar.
let ind = num.indexOf(8)
if (ind == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${ind}`)
}
