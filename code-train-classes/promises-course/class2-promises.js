const createP = (text) => {
    const p = document.createElement("p")
    p.textContent = text
    document.body.appendChild(p)
}

function setup() {
    delay('1000')
    .then (() => createP('Hello'))
    .catch((err) => console.log(err))
}

function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
        reject(new Error('Delay requires a valid number'))
    }
    setTimeout(resolve, time); //"Depois desse tempo, resolva a promessa"
  });
}

setup()
