// Ele quebra um array, ele quebra um conjunto de elementos e devolve elemento por elemento. Ele é bom para simplificar coleções em arrays e em html collections. Se quiser transformar uma coleção de elementos em HTML e transformar em um array de elementos. Ele facilita isso.

// let n1 = [10,20,30]
// let n2= [11,22,33,44,55]
// let n3=[...n1,...n2]

// console.log("n1: + " + n1)
// console.log("n2: + " + n2)
// console.log("n3: + " + n3)
// console.log("Tipo de n3: " + typeof(n3))


//let n3=[...n1] Copiou um array para o outro, ele apenas repete. 

// const jogador1={nome:"Bruno",energia:100,vidas:3,magia:150}
// const jogador2={nome:"Blues",energia:100,vidas:5,velocidade:80}
// const jogador3={...jogador1,...jogador2}


// console.log(jogador3) //Assim, quando é igual ele retorna o ultimo utilizado das propriedades comuns, mas ele concatena os objetos diferente e os adiciona. 

// const soma=(v1,v2,v3)=>{
//     return v1+v2+v3
// }

// let valores=[1,5,4,10] //Ele pega os 3 primeiro
// console.log(soma(...valores))

const objs1=document.getElementsByTagName("div")//O Node não reconhece o DOCUMENT. Node é servidor, então ele não reconhece o DOM, que é a pagina. Mas no console do chrome reconhece.
const objs2=[...document.getElementsByTagName("div")]//Ao converter em ARRAY, pode-se adicionar outros TIPOS de elementos que não de HTML. Também permite outras funções. 

//EXEMPLO:

objs2.forEach(element => { // PARA CADA ELEMENTO DO OBJS2, RECEBE O HTML DE CURSO. console.log(elements) mostra os elementos contidos no array da variavel objs2
    element.innerHTML="curso"
});

console.log(objs1)
console.log(objs2)

