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

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, //gera números aleatórios para a comida aparecer
    y: Math.floor(Math.random() * 15 + 1) * box
};

function drawFood() {
    context.fillStyle = "tomato";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left"; //cada código corresponde a uma tecla do teclado
    if (event.keyCode == 38 && direction != "down") direction = "up"; 
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";

}

function startGame() {
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0; //isso fará com que a cobrinha não saia da tela
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    createBackground();
    createSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); //tira o último elemento do Array
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box; 
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame, 100) //a cada 100ms atualiza


