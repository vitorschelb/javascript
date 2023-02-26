const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color"); //Esse é o span que vai mostrar o hexadecimal

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  console.log(randomNumber);
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
