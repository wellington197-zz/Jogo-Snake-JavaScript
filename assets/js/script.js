let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

//informa quantos pixels terá nosso quadradinho
let box=32;

function criarBG() {
    context.fillStyle="lightgreen";
    context.fillRect(0,0,16*box,16*box);

}

criarBG();
