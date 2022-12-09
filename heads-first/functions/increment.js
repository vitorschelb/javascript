var age = 7;
function addOne(x) {
    x = age++ ;
    console.log("The age is " + age);
}
addOne(age);

//Duvida. Se age é copiado para X e X é age++, porque age printa 8 e x printa 7.