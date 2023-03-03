const btn_soma = document.querySelector("#soma");
const btn_subtrai = document.querySelector("#subtrai");
const btn_multiplica = document.querySelector("#multiplica");
const btn_divide = document.querySelector("#divide");
const res = document.querySelector("#res");

const operacoes = [
  () => {
    const val = [
      document.getElementById("valor1").value,
      document.getElementById("valor2").value,
    ];
    res.value = Number(val[0]) + Number(val[1]);
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
  },
  () => {
    const val = [
      document.getElementById("valor1").value,
      document.getElementById("valor2").value,
    ];
    res.value = Number(val[0]) - Number(val[1]);
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
  },
  () => {
    const val = [
      document.getElementById("valor1").value,
      document.getElementById("valor2").value,
    ];
    res.value = Number(val[0]) * Number(val[1]);
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
  },
  () => {
    const val = [
      document.getElementById("valor1").value,
      document.getElementById("valor2").value,
    ];
    res.value = Number(val[0]) / Number(val[1]);
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
  },
];

btn_soma.addEventListener("click", operacoes[0]);
btn_subtrai.addEventListener("click", operacoes[1]);
btn_multiplica.addEventListener("click", operacoes[2]);
btn_divide.addEventListener("click", operacoes[3]);