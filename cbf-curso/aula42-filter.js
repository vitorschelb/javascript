const filtroMaior18 = (valor, indice, arr) => {
  if (valor >= 18) return valor;
}; //Cria um constante que indica para a função criada filtroMaior18

const idades = [15, 21, 30, 17, 18, 44, 12, 50];
const maior = idades.filter(filtroMaior18); //A constante maior, indica para idades aplicando o filter, o filter precisa indicar o seu parametro de filtragem, que indica para a constanter filtroMaior18, que é a função de filtragem criada.

console.log(idades);
console.log(maior);

const menor = idades.filter((val, ind, arr) => {
  if (val <= 18) return val;
}); //Aqui é a mesma coisa, só que em vez que criar uma constante que indica para função e usa-la no filter, é criada direto como uma arrow function

console.log(menor);
