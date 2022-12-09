function calculateArea(r) { //3 Setei a função
    var area; // Deixei o valor de area em aberto
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r; //4Caso r seja maior que 0, o que é pois o argumento do parametro r foi copiado de radius, area será a operação declarada na função.
        return area; // 5Ele para a execução da função e me retorna o valor da area. Se tirar o return, ele afirma que area não é definida.
    }
}

var radius = 5.2; //1 Declarei Radius como 5.2
var theArea = calculateArea(radius); //2 pass-by/copiei o argumento radius, com o valor de 5.2 para o parametro r. 6 Criei a variavel theArea para armazenar a area calculada pela função criada. No caso, theArea é o RESULTADO da função calculateArea.
console.log("The area is: " + theArea);