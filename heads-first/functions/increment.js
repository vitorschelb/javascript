var age = 7;
function addOne(x) {
    x = x + 1;
    console.log("The age is " + x);
}

addOne(age);
 // Age que é uma variável com valor 7, é passada como um argumento para o parametro X. A função então declara o incremento de +1 para X. Apenas X, que é uma cópia de age foi incrementado, age continua a ser 7.

//JS passa os argumentos para uma função usando pass-by-value, isso significa que cada argumento é copiado na variavel do parametro.

//"whatever happens to a parameter in the function, stays in the function"

function doIt(param) {
    param = 2;
}
var test = 1;
console.log(test);
doIt(test);


//Por que se eu pedir pra printar o param ele não printa?