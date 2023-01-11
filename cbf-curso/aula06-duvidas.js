let n1=1
let n2="1"

console.log(n1===n2)

let v1={nome:"Bruno"}
let v2={nome:"Bruno"}

console.log(v1===v2)

//O === também pega o TIPO de OBJETO e a referência de posição de memória, se for só v1=Bruno e v2=Bruno aceita, por que não é um bloco diferente, ele puxa a mesma. Se colocar o {} ele puxa de blocos diferentes, lugares de memória diferentes.

//DEFER - > Carrega HTML junto com JS. Mesma coisa que colocar embaixo do HTML.