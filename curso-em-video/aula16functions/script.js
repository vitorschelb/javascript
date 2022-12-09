//A ordem de uma função:
//CHAMADA DA FUNÇÃO, pode ser uma rotina, sem necessidade de disparo. A chamada pode ser automatizada.
//PARAMETRO, o que é preciso para cumprir a função e o que é se deseja. 
//AÇÃO, todo procedimento envolvido para cumprir a função.
//RETORNO, retorna o que foi feito.
//Nem todas tem parametros e nem todas tem retorno. 

//Funções: São -ações- executadas assim que são -chamadas- ou em decorrência de algum -evento.-

//Uma função pode receber parâmetros e retornar um resultado.

/* function ação(parametro) <- parametro formal {
    ação é tudo que é feito aqui
    return res -> retorno
}

ação(5) <- parametro real */

//PARAMETROS É A VARIAVEL QUE RECEBE UM ARGUMENTO
//ARGUMENTOS TAMBEM SÃO RECEBIDOS, MAS EM PARAMETROS

function parimpar(n) {
    if (n%2==0) {   //ação
        return 'par' //ação
    } else {          //ação
        return 'impar' // retorno
    }
}
let res = parimpar(6) //chamada
console.log(res)
