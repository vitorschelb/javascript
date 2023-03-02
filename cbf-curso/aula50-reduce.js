//Reduce, permite fazer uma redução do array. A redução vem do código que for especificado. A forma de comportamento da função é definida pelo programador.

const p_array = document.querySelector("#array");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = [1, 2, 3, 4, 5];
let ant = [];
let atu = [];

p_array.innerHTML = "[" + elementos_array + "]";

btnPesquisar.addEventListener("click", (evt) => {
  resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao) => {
    ant.push(anterior);
    atu.push(atual);
    return atual + anterior; // 1+2 3+3 6+4 10+5 = 15
  });
  resultado.innerHTML += "<br/>V.Anterior: " + ant + "<br/>V.Atual: " + atu;
});
