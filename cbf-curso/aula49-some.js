//A função some() retorna false somente se todos os elementos do array forem iguais ao valor passado como argumento. Como no seu código você está verificando se e != valor, caso haja algum elemento diferente do valor pesquisado, ele irá retornar true.

const p_array = document.querySelector("#array");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");
const valor = document.querySelector("#txt_pesquisar");

const elementos_array = [16, 12, 10, 17, 15, 13, 11, 19];

p_array.innerHTML = "[" + elementos_array + "]";

btnPesquisar.addEventListener("click", (evt) => {
  let encontrado = false;
  elementos_array.some((e, i, a) => {
    if (e == valor.value) {
      encontrado = true;
      return true;
    }
  });
  if (encontrado) {
    //Por padrão é true
    resultado.innerHTML = "OK";
  } else {
    resultado.innerHTML = "Elemento não existe no Array";
  }
  valor.value = "";
});

//'encontrado' é utilizado para armazenar o resultado da pesquisa e definir o valor inicial dessa variável como false. Em seguida, dentro do seu loop, se o valor for encontrado, você pode mudar o valor da variável para true e sair do loop usando o comando break. Assim, a variável irá manter seu valor correto e você poderá usá-la para definir o conteúdo da tag #resultado.

//Caso o valor pesquisado seja encontrado no array, a variável encontrado será alterada para true e o loop será interrompido. Caso contrário, a variável manterá seu valor inicial e, ao final do loop, o código verificará o valor atual da variável para definir o conteúdo da tag #resultado.
