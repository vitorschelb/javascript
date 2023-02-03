//5! = 5*4*3*2*1 = 120

let n = 5
let fat = 1

while(n>=1) {
    fat = fat * n
    //fat*=n
    n--
}

console.log(fat)