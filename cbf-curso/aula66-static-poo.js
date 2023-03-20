class npc {
  static alerta = false;
  constructor(energia) {
    this.energia = energia;
    // this.alerta = false;
  }
  info = () => {
    console.log(`Energia: ${this.energia}`);
    console.log(`Alerta: ${npc.alerta ? "Sim" : "Não"}`); //Usa a classe em vez do this.
    console.log("-----------------");
  };
  static setAlerta = () => {
    npc.alerta=false
  }
}

const npc1 = new npc(100);
const npc2 = new npc(80);
const npc3 = new npc(30);

npc.alerta = true; //Aqui ele não alerta a INSTANCIA do OBJETO, ele modifica a propriedade da classe. Alterando todos.
npc1.setAlerta() //Pode ver que quando vai na instancia do objeto não funciona.
