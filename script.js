let canvas = document.getElementById("snake");
let context = canvas.getContext("2d") //renderiza o desenho dentro do canvas. Esse será em plano 2d
let box = 32;

let snake = [];
snake[0] = {
    x: 8 * box, //um tamanho para o "corpo" da cobrinha
    y: 8 * box
}

let direction = "right"; //direção para a cobrinha andar

function createBackground() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16 * box, 16 * box) //x, y, altura e largura do canvas
}

//A cobrinha é um Array de coordenadas. Basicamente adiciona um elemento e retira o último para simular ela andando
function createSnake() {
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "darkblue";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function startGame() {
    createBackground();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop(); //tira o último elemento do Array
    
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame, 100) //a cada 100ms atualiza


