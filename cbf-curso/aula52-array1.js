let cores = ["Azul", "Verde", "Vermelho"]
let cursos = ["HTML", "CSS", "Javascript", cores];
const container = document.querySelector(".container");




cursos[0] = "C++";
cursos.push("Python"); //Final
cursos.pop(); //Retira o ultimo
cursos.unshift("2023"); //Adiciona no inicio
cursos.shift(); //Retira o primeiro

console.log(cursos[3][1]) //Navegar em matriz, array dentro de array e assim por diante

cursos.map((el) => {
  let p = document.createElement("p");
  p.innerHTML = el;
  container.appendChild(p);
});
