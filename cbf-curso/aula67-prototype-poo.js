// Quando precisar adicionar uma nova propriedade, ou um método em um objeto se usa prototype.

const Nave = function (energia) {
  this.energia = energia;
  this.disparos = 100;
};

Nave.prototype.vidas=3

const n1 = new Nave(100);
console.log(Nave);
console.log(n1);
console.log(n1.energia);
console.log(n1.vidas);
