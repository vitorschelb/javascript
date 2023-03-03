const btn_soma = document.querySelector("#soma");
const btn_subtrai = document.querySelector("#subtrai");
const btn_multiplica = document.querySelector("#multiplica");
const btn_divide = document.querySelector("#divide");
const res = document.querySelector("#res");
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

const soma = () => {
  const val = [valor1.value, valor2.value];
  res.value = Number(val[0]) + Number(val[1]);
};

const subtrai = () => {
  const val = [valor1.value, valor2.value];
  res.value = Number(val[0]) - Number(val[1]);
};

const multiplica = () => {
  const val = [valor1.value, valor2.value];
  res.value = Number(val[0]) * Number(val[1]);
};

const divide = () => {
  const val = [valor1.value, valor2.value];
  res.value = Number(val[0]) / Number(val[1]);
};

const limpa = () => {
  valor1.value = "";
  valor2.value = "";
};

const operacoes = [
  () => {
    soma();
    limpa();
  },
  () => {
    subtrai();
    limpa();
  },
  () => {
    multiplica();
    limpa();
  },
  () => {
    divide();
    limpa();
  },
];

btn_soma.addEventListener("click", operacoes[0]);
btn_subtrai.addEventListener("click", operacoes[1]);
btn_multiplica.addEventListener("click", operacoes[2]);
btn_divide.addEventListener("click", operacoes[3]);
