function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundo = data.getSeconds()
setInterval(carregar, 1)
msg.innerHTML = `${hora}:${minuto}:${segundo}`

if (hora >= 0 && hora < 12) {
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'

} else if (hora >= 12 && hora <18) {
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
} else {
    img.src = 'noite.jpeg'
    document.body.style.background ='#515154'
 }

}