//Every procura por equivalencias, se todos os elementos do array se equivalem com a regra especificada

const p_array = document.querySelector("#array");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = [19, 23, 17, 18, 16, 21, 20];

p_array.innerHTML = "[" + elementos_array + "]";

btnPesquisar.addEventListener("click", (evt) => {
  const ret = elementos_array.every((e, i, a) => {
    if (e < 18) {
      resultado.innerHTML = "Elemento não conforme na posição " + i;
    }
    return e >= 18;
  });
  if (ret) {
    //Por padrão é true
    resultado.innerHTML = "OK";
  }
});

//como fazer continuar?