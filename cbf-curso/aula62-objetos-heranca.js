// Herança é quando se tem uma classe parent, que herda propriedades e metodos para outras classes children.

class Carro {
  constructor(nome, portas) {
    this.nome = nome;
    this.portas = portas;
    this.ligado = false;
    this.vel = 0;
    this.cor = "";
  }

  ligar = () => {
    this.ligado = true;
  };

  desligar = () => {
    this.ligado = false;
  };

  setCor = (cor) => {
    this.cor = cor;
  };
}

//A propriedade extends, estende a classe de 'Carro' para 'Militar'. Herança.
class Militar extends Carro {
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas); //O super invoca especificamente o que eu quero herdar da classe pai. É preciso definir o parametro no construtor e o super para o programa entender que é uma herança.
    this.blindagem = blindagem;
    this.municao = municao;
    this.setCor("Verde") //Como é uma função do primeiro, é preciso passsar o argumento da função
  }
  atirar = () => {
    this.municao > 0 ? this.municao-- : "Recarregue";
  };
}

const carro1 = new Carro("Normal", 4); //Entre parentesis os argumentos dos parametros do construtor
carro1.ligar();
carro1.setCor("Preto");

const carro2 = new Militar("Lutador", 1, 100, 50);
// for (let i = carro2.municao; i > 0; i--) {
//   carro2.atirar();
// }

console.log(`Nome: ${carro1.nome}`);
console.log(`Portas: ${carro1.portas}`);
console.log(`Ligado: ${carro1.ligado ? "Sim" : "Não"}`); //É POSSÍVEL USAR TERNÁRIAS DENTRO DE TEMPLATE STRING!!!
console.log(`Velocidade: ${carro1.vel}`);
console.log(`Cor: ${carro1.cor}`);
console.log("--------------------------");

console.log(`Nome: ${carro2.nome}`);
console.log(`Portas: ${carro2.portas}`);
console.log(`Ligado: ${carro2.ligado ? "Sim" : "Não"}`);
console.log(`Velocidade: ${carro2.vel}`);
console.log(`Cor: ${carro2.cor}`);
console.log(`Blindagem: ${carro2.blindagem}`);
console.log(`Munição: ${carro2.municao}`);


const i_name = document.querySelector("#name");
const i_doors = document.querySelector("#doors");
const i_armor = document.querySelector("#armor");
const i_ammo = document.querySelector("#ammo");
const c_radio = document.querySelector("#civilian");
const m_radio = document.querySelector("#military");
const btn_add = document.querySelector("#btn_add");
const fleet = document.querySelector("#fleet");