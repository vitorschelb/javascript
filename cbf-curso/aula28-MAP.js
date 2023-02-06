// Ela serve para percorrer arrays, ela é usava para utilizar elementos de uma coleção. O Map é o metodo mais OTIMIZADO para percorrer TODA A COLEÇÃO!


// const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
// cursos.map((e,i)=> {  //Indiferente da variavel no parametro, ele volta o conteudo of aquilo, e a posição. Ele percorrer valores. O primeiro indica CADA ELEMENTO, o segundo é a POSIÇÃO.
//     console.log("Curso: " + e + " - Posição do curso: " + i)

// })

// let el=document.getElementsByTagName("div")
// el=[...el]
// el.map((e,i)=>{ //É EL não é uma coleção iteravel, então ele não reconhece como função. Ele é um DOCUMENT, um elemento HTML, é preciso dar um spread nele, para ser lido como ARRAY.
// console.log(e.innerHTML) //Retorna apenas o QUE ESTA DENTRO
// e.innerHTML = "Vitor Schelb" //Aqui ele muda TODOS elementos para o que foi declarado.
// })

// const el2=document.getElementsByTagName("div")
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML) // A ARROW FUNCTION vai OPERAR os elementos apontados, no EL, que é a variável que indica para essa coleção de elementos existentes. Como é innerHTML é uma PROPRIEDADE do elemento, se usa chaves. Ou seja, ele pega o InnerHTML e passa pra ele o parametro que quer trabalhar.
// console.log(val)

const convertInt=(e) => parseInt(e)
var num = ['1','2','3','4','5'].map(convertInt) //Isso aqui é texto pelo APOSTROFO, não é NÚMERO. Quando joga o MAP, ele permite percorrer todos elementos e realizar a função de conversão apontada pela variavel convertInt. No caso o E, conforme em cima explicado, indica CADA elemento, o segundo argumento, se tivesse, indicaria a POSIÇÃO. Se fosse uma coleção que indicasse elementos HTML, bataria utiliza o SPREAD, para converte-los em ARRAY iterários.
console.log(num)

//Um outro exemplo abaixo:

const dobrar = (e)=>e*2
num = ['1','2','3','4','5'].map(dobrar)
