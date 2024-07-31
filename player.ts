interface Player extends Vector {
    back?: boolean;
    middle?: boolean;
    front: boolean;
    size: number;
    speed: number;
    name: string;
    img: CanvasImageSource;
    inventory?: Objects[];
}

//inputs

var moveBack = (ply: Player) => {
    if (ply.front) {
        ply.front = false;
        ply.middle = true;
        ply.x = ((ply.x-center.x)*(1-scaleDown)) + center.x;
        ply.y = ((ply.y-center.y)*(1-scaleDown)) + center.y;
    } else if (ply.middle) {
        ply.back = true;
        ply.middle = false;
        ply.x = ((ply.x-center.x)*(1+scaleUp)) + center.x;
        ply.y = ((ply.y-center.y)*(1+scaleUp)) + center.y;
        ply.x = ((ply.x-center.x)*(1-scaleDown*2)) + center.x;
        ply.y = ((ply.y-center.y)*(1-scaleDown*2)) + center.y;
    }
}

var moveFront = (ply: Player) => {
    if (ply.back) {
        ply.back = false;
        ply.middle = true;
        ply.x = ((ply.x-center.x)*(1+(2/3))) + center.x;
        ply.y = ((ply.y-center.y)*(1+(2/3))) + center.y;
        ply.x = ((ply.x-center.x)*(1-scaleDown)) + center.x;
        ply.y = ((ply.y-center.y)*(1-scaleDown)) + center.y;
    } else if (ply.middle) {
        ply.front = true;
        ply.middle = false;
        ply.x = ((ply.x-center.x)*(1+scaleUp)) + center.x;
        ply.y = ((ply.y-center.y)*(1+scaleUp)) + center.y;
    }
}

var moveUp = (ply: Player) => {
    if (ply.back) {
        ply.y -= (1-scaleDown*2) * ply.speed;
    } else if (ply.middle) {
        ply.y -= ply.speed * (1-scaleDown);
    } else if (ply.front) {
        ply.y -= ply.speed;
    }
} 

var moveDown = (ply: Player) => {
    if (ply.back) {
        ply.y += (1-scaleDown*2) * ply.speed;
    } else if (ply.middle) {
        ply.y += ply.speed * (1-scaleDown);
    } else if (ply.front) {
        ply.y += ply.speed;
    }
}

var moveLeft = (ply: Player) => {
    if (ply.back) {
        ply.x -= (1-scaleDown*2) * ply.speed;
    } else if (ply.middle) {
        ply.x -= ply.speed * (1-scaleDown);
    } else if (ply.front) {
        ply.x -= ply.speed;
    }
}

var moveRight = (ply: Player) => {
    if (ply.back) {
        ply.x += (1-scaleDown*2) * ply.speed;
    } else if (ply.middle) {
        ply.x += ply.speed * (1-scaleDown);
    } else if (ply.front) {
        ply.x += ply.speed;
    }
}

var player1: Player = {
    x: 300,
    y: 125,
    front: true,
    size: 100,
    speed: 100,
    name: "juan",
    img: document.getElementById("water") as CanvasImageSource,
}