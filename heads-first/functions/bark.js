function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF")
    } else {
        console.log(name + " says woof woof")
    }
}

// bark("Roover", 23)
// bark("Spot", 13)
// bark("Spike", 53)
// bark("Lady", 17)
bark("Juno", 20)
bark("Scottie", -1)
bark("Dino", 0, 0)
bark("Fino", "20") //Pq?
bark("Lady", 10)
bark("Bruno", 21)