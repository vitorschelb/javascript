const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn"); //Botão de mudar
const color = document.querySelector(".color"); //Span color

btn.addEventListener('click', function() { //Estudar EventListener
    //get random number between 0 - 3 
    const randomNumber = getrandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getrandomNumber() {
    return Math.floor(Math.random() * colors.length); //math random, gera entre 0 e 0.9 infinito, multiplica pela constante colors e seu comprimento no caso 3. O math.floor, arredonda.
}