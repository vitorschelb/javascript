// Um mesmo metodo vai ter ações diferentes, na parent uma ação e no child outra ação

class Carro {
  constructor(tipo, estagioTurbo) {
    this.turbo = new Turbo(estagioTurbo);
    
    if (tipo == 1) {
      this.velMax = 120;
      this.nome="normal"
    } else if (tipo == 2) {
      this.velMax = 160;
      this.nome="esportivo"
    } else if (tipo == 3) {
      this.velMax = 200;
      this.nome="super esportivo"
    }
    this.velMax += this.turbo.potencia;
  }
  info() {
    console.log(this.nome)
    console.log(this.velMax)
    console.log(this.turbo)
    console.log("-------------")

  }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo) {
        super(4,estagioTurbo)
        this.velMax=300+this.turbo.potencia;
        this.nome="Carro Especial"
    }
    // POLIMORFISMO, ESSE INFO SUBSTITUI O INFO DE CIMA, MAS SE CHAMAR O OUTRO DENTRO DELE, ELE ACEITA
    info() {
        // super.info()
        console.log(`Nome: ${this.nome}`)
        console.log(`Vel.Max: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo}`)
        console.log("-------------")
    }
}

class Turbo {
  constructor(estagio) {
    if (estagio === 0) {
      this.potencia = 0;
    } else if (estagio === 1) {
      this.potencia = 50;
    } else if (estagio === 2) {
      this.potencia = 75;
    } else if (estagio === 3) {
      this.potencia = 100;
    }
  }
}

const c1 = new Carro(1,0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(4)

c1.info()
c2.info()
c3.info()
