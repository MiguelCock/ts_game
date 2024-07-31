var body = document.body as HTMLBodyElement;
var canvas = document.getElementById("canvas") as HTMLCanvasElement;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

//#270047
//#56009c
//#c28cff
ctx.fillStyle = "#c28cff";

var scaleDown: number = 0.2;
var scaleUp: number = 0.25;

var size: number = 200;

var center: Vector = {
    x: 500,
    y:325
}

body.addEventListener("keydown", (event : KeyboardEvent) => {
    if (event.key === "s" || event.key === "S") {
        moveDown(player1);
    }
    if (event.key === "d" || event.key === "D") {
        moveRight(player1);
    }
    if (event.key === "w" || event.key === "W") {
        moveUp(player1);
    }
    if (event.key === "a" || event.key === "A") {
        moveLeft(player1)
    }
    if (event.key === "q" || event.key === "Q") {
        moveBack(player1);
    }
    if (event.key === "e" || event.key === "E") {
        moveFront(player1);
    }
})

body.addEventListener("click", (event: MouseEvent) => {
    
})

var loop = () => {
    //DrawBackground
    ctx.fillRect(0, 0, 1000, 650);
    Draw(grass, 2);
    //DrawBack
    DrawChunkBack(mapa);
    if (player1.back) {
        DrawBack(player1);
    }

    //DrawMiddle
    DrawChunkMiddle(mapa);
    if (player1.middle) {
        DrawMiddle(player1);
    }

    //DrawFront
        DrawChunkFront(mapa);
    if (player1.front) {
        DrawFront(player1);
    }

    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);