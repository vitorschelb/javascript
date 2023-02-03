//A funcao anonima como nao tem nome, precisa ser associada a uma variavel para ela ser executada em tempo real.
//New é um operador construtor da função, ela pode ser feita na propria linha de declaração. Esse tipo de funão usa F maiusculo. Usa "" tambem. Ele recebe os parametros e o CORPO da FUNÇÃO


const f=new Function("v1","v2", "v3", "return v1+v2+v3")

console.log(f(10,5,15)) //Aqui eu chamo o F, que indica a New Function, como os argumentos estão sem parametros, eu os declaro DENTRO de F

