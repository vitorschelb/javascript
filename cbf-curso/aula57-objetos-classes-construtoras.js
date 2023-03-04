// Primeiro: Crio a classe com os parâmetros que o objeto receberá. Esses parametros são como variáveis e podem abrigar diferentes tipos de propriedades, métodos, arrays e funções.

class Carro {
  constructor(parametro_nome, parametro_tipo) {
    this.nome = parametro_nome;
    if (parametro_tipo == 1) {
      this.tipo = "Esportivo";
      this.velmax = "300";
    } else if (parametro_tipo == 2) {
      this.tipo = "Utilitário";
      this.velmax = "120";
    } else if (parametro_tipo == 3) {
      this.tipo = "Passeio";
      this.velmax = "100";
    } else {
      this.tipo = "Colecionador";
      this.velmax = "80";
    }
  }

  getInfo() {
    return [this.nome, this.tipo, this.velmax];
  }

  mudarNome(nome) {
    this.nome=nome
  }

  info() {
    console.log(`Nome ${this.nome}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`V.Max: ${this.velmax}`);
  }
}

//Criar os objetos

let carro1 = new Carro("Rapidão", 1);
let carro2 = new Carro("Pau de Toda Obra", 2);
let carro3 = new Carro("Super Conforto", 3);
let carro4 = new Carro("Reliquia", 4);

//Tambem posso criar uma propriedade que muda uma informação da classe recebida pelo objeto.

carro2.mudarNome("Uno com Escada")

//Chama a função para me mostrar o que eu quero

console.log(carro2.getInfo()[0]); //Indice é usado caso queira uma propriedade especifica dentro do array, basta colocar sua posição


