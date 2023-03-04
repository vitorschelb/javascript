// É um array do tipo chave-valor. É preciso adicionar chave e valor.
const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("Curso", "Javascript");
mapa.set(10, "CFB Cursos");
mapa.set(1, 100);
mapa.set("Canal", 100);

// caixa.innerHTML = mapa.get("Curso")
// O 'get', "pega" o valor da chave. O has, "verifica" se a chave existe na coleção.
// A partir dai as possibilidades são inumeras!
mapa.delete(1)
let pesquisa = 10;
let res = "";
if (mapa.has(pesquisa)) {
  res = "A chave existe na coleção e seu valor é: " + mapa.get(pesquisa);
  res+= "<br/> O tamanho da coleção é: " + mapa.size //Size é uma propriedade, não é uma função por isso não recebe parentesis.
} else {
  res = "A chave não existe na coleção";
}
caixa.innerHTML = res;

mapa.forEach((el)=> {
  console.log(el)
})
