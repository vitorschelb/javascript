const i_name = document.querySelector("#name");
const i_doors = document.querySelector("#doors");
const i_armor = document.querySelector("#armor");
const i_ammo = document.querySelector("#ammo");
const c_radio = document.querySelector("#civilian");
const m_radio = document.querySelector("#military");
const btn_add = document.querySelector("#btn_add");
const fleet = document.querySelector("#fleet");
const inputs = document.querySelectorAll("input[type='text]");
let arrayFleet = [];

class Car {
  constructor(name, doors) {
    this.name = name;
    this.doors = doors;
  }
  setName(name) {
    this.name = name;
  }
  setDoors(doors) {
    this.doors = doors;
  }
}

class Military extends Car {
  constructor(name, doors, armor, ammo) {
    super(name, doors);
    this.armor = armor;
    this.ammo = ammo;
  }
  setArmor(armor) {
    this.armor = armor;
  }
  setAmmo(ammo) {
    this.ammo = ammo;
  }
}

m_radio.addEventListener("click", () => {
  i_armor.removeAttribute("disabled");
  i_ammo.removeAttribute("disabled");
});

c_radio.addEventListener("click", () => {
  i_armor.setAttribute("disabled", "disabled");
  i_ammo.setAttribute("disabled", "");

  i_armor.value = 0;
  i_ammo.value = 0;
});

const manager = () => {
  fleet.innerHTML = "";

  arrayFleet.forEach((newCar) => {
    const div = document.createElement("div");
    div.setAttribute("class", "car");

    if (newCar instanceof Military) {
      div.innerHTML = `Name: ${newCar.name} <br/> Doors: ${newCar.doors} <br/> Armor: ${newCar.armor} <br/> Ammo: ${newCar.ammo}`;
    } else {
      div.innerHTML = `Name: ${newCar.name} <br/> Doors: ${newCar.doors}`;
    }
    fleet.appendChild(div);
  });
};

btn_add.addEventListener("click", () => {
  if (c_radio.checked) {
    const newCar = new Car(i_name.value, i_doors.value);
    arrayFleet.push(newCar);
  } else {
    const newCar = new Military(
      i_name.value,
      i_doors.value,
      i_armor.value,
      i_ammo.value
    );
    arrayFleet.push(newCar);
  }
  manager();
});

// inputs.forEach((input) => {
//input.value = "";
//});
