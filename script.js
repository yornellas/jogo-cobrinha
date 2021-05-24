let canvas = document.getElementById("snake");
let context = canvas.getContext("2d") //renderiza o desenho dentro do canvas. Esse será em plano 2d
let box = 32;

function createBackground() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16 * box, 16 * box) //x, y, altura e largura do canvas
}

createBackground();