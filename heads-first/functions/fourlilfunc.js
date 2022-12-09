function dogYears(dogName, age) {
    var years = age * 7;
    console.log(dogName + " is " + years + " years old.");
}
var myDog = "Fido";
dogYears(myDog, 4);

function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea + ".");
}
var guests = 3;
makeTea(guests, "Earl Grey");

function secret() {
    console.log("The secret of life is 42.");
}
secret();

function speak(kind) {
    var defaultSound = "";
    if (kind == "dog") {
        alert("Woof");
    } else if (kind == "cat") {
        alert("Meow");
    } else {
        alert(defaultSound);
    }
}
var pet = prompt("Enter a type of pet: ");
speak(pet)


//Variables: years, myDog, guests, defaultSound, pet.
//Functions: dogYears, makeTea, secret, speak.
//Built-in functions: console.log, if/else, prompt, alert.
//Arguments: MyDog, 4, 3, Early Grey pet, dog, cat. ATENÇÃO! As strings de console.log e alert, também são considerados agumentos!
//Parameters: dogName, age, cups, tea, kind.