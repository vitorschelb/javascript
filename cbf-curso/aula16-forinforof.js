const objs=document.getElementsByTagName("div")

for(o of objs) {
    console.log(o.innerHTML="Curso")
}

for(o in objs) {
    console.log(objs[o].innerHTML)
}

// let num =[10,20,30,40,50]

// for(let i=0; i<num.length;i++) { //Para i=0, enquanto i for menor que o comprimento do array num, ele recebe +1
//     console.log(num[i]) //Me mostre o número contido na variavel NUM, na posição de I. 
// }

// for(n in num) { //Por padrão o n contém a posição de cada um dos elementos.
//     console.log(num[n]) //Ele executa a mesma função superior, o IN mostra os elementos DENTRO. Mas não diretamente.
// }

// for(n of num) { //Por padrão o n contém o proprio elemento da variável, no caso o array de num.
//     console.log(n) //Perceba que ele já cai direto
// }