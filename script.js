var dirt = {
    x: 450,
    y: 250,
    name: "dirt",
    size: 100,
    img: document.getElementById("dirt")
};
var grass = {
    x: 450,
    y: 250,
    name: "grass",
    size: 100,
    img: document.getElementById("grass")
};
var stone = {
    x: 450,
    y: 250,
    name: "stone",
    size: 100,
    img: document.getElementById("stone")
};
var DrawBack = function(obj, vec) {
    if (vec !== undefined) {
        ctx.drawImage(obj.img, vec.x, vec.y, obj.size * (1 - scaleDown * 2), obj.size * (1 - scaleDown * 2));
    } else {
        ctx.drawImage(obj.img, obj.x, obj.y, obj.size * (1 - scaleDown * 2), obj.size * (1 - scaleDown * 2));
    }
};
var DrawMiddle = function(obj, vec) {
    if (vec !== undefined) {
        ctx.drawImage(obj.img, vec.x, vec.y, obj.size * (1 - scaleDown), obj.size * (1 - scaleDown));
    } else {
        ctx.drawImage(obj.img, obj.x, obj.y, obj.size * (1 - scaleDown), obj.size * (1 - scaleDown));
    }
};
var DrawFront = function(obj, vec) {
    if (vec !== undefined) {
        ctx.drawImage(obj.img, vec.x, vec.y, obj.size, obj.size);
    } else {
        ctx.drawImage(obj.img, obj.x, obj.y, obj.size, obj.size);
    }
};
var Draw = function(obj, size) {
    if (size !== undefined) {
        ctx.drawImage(obj.img, center.x, center.y, size, size);
    }
};
var mapa = {
    layer1: [
        [0, 1, 0, 0],
        [1, 2, 1, 1],
        [1, 0, 1, 0],
        [1, 2, 1, 3]
    ],
    layer2: [
        [0, 1, 0, 0],
        [1, 2, 1, 3],
        [2, 0, 1, 0],
        [1, 1, 1, 1]
    ],
    layer3: [
        [0, 1, 0, 0],
        [3, 1, 2, 1],
        [1, 0, 2, 0],
        [1, 2, 1, 1]
    ],
};
var DrawChunkBack = function(chunk) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            switch (chunk.layer3[j][i]) {
                case 1:
                    DrawBack(dirt, { x: i * dirt.size * (1 - scaleDown * 2) + center.x, y: j * dirt.size * (1 - scaleDown * 2) + center.y });
                    break;
                case 2:
                    DrawBack(grass, { x: i * grass.size * (1 - scaleDown * 2) + center.x, y: j * grass.size * (1 - scaleDown * 2) + center.y });
                    break;
                case 3:
                    DrawBack(stone, { x: i * stone.size * (1 - scaleDown * 2) + center.x, y: j * stone.size * (1 - scaleDown * 2) + center.y });
                    break;
                default:
                    break;
            }
        }
    }
};
var DrawChunkMiddle = function(chunk) {
    if (player1.back) {
        ctx.globalAlpha = 0.4;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            switch (chunk.layer2[j][i]) {
                case 1:
                    DrawMiddle(dirt, { x: i * dirt.size * (1 - scaleDown) + center.x, y: j * dirt.size * (1 - scaleDown) + center.y });
                    break;
                case 2:
                    DrawMiddle(grass, { x: i * grass.size * (1 - scaleDown) + center.x, y: j * grass.size * (1 - scaleDown) + center.y });
                    break;
                case 3:
                    DrawMiddle(stone, { x: i * stone.size * (1 - scaleDown) + center.x, y: j * stone.size * (1 - scaleDown) + center.y });
                    break;
                default:
                    break;
            }
        }
    }
    ctx.globalAlpha = 1;
};
var DrawChunkFront = function(chunk) {
    if (player1.middle) {
        ctx.globalAlpha = 0.4;
    } else if (player1.back) {
        ctx.globalAlpha = 0.1;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            switch (chunk.layer1[j][i]) {
                case 1:
                    DrawFront(dirt, { x: i * dirt.size + center.x, y: j * dirt.size + center.y });
                    break;
                case 2:
                    DrawFront(grass, { x: i * grass.size + center.x, y: j * grass.size + center.y });
                    break;
                case 3:
                    DrawFront(stone, { x: i * stone.size + center.x, y: j * stone.size + center.y });
                    break;
                default:
                    break;
            }
        }
    }
    ctx.globalAlpha = 1;
};
//inputs
var moveBack = function(ply) {
    if (ply.front) {
        ply.front = false;
        ply.middle = true;
        ply.x = ((ply.x - center.x) * (1 - scaleDown)) + center.x;
        ply.y = ((ply.y - center.y) * (1 - scaleDown)) + center.y;
    } else if (ply.middle) {
        ply.back = true;
        ply.middle = false;
        ply.x = ((ply.x - center.x) * (1 + scaleUp)) + center.x;
        ply.y = ((ply.y - center.y) * (1 + scaleUp)) + center.y;
        ply.x = ((ply.x - center.x) * (1 - scaleDown * 2)) + center.x;
        ply.y = ((ply.y - center.y) * (1 - scaleDown * 2)) + center.y;
    }
};
var moveFront = function(ply) {
    if (ply.back) {
        ply.back = false;
        ply.middle = true;
        ply.x = ((ply.x - center.x) * (1 + (2 / 3))) + center.x;
        ply.y = ((ply.y - center.y) * (1 + (2 / 3))) + center.y;
        ply.x = ((ply.x - center.x) * (1 - scaleDown)) + center.x;
        ply.y = ((ply.y - center.y) * (1 - scaleDown)) + center.y;
    } else if (ply.middle) {
        ply.front = true;
        ply.middle = false;
        ply.x = ((ply.x - center.x) * (1 + scaleUp)) + center.x;
        ply.y = ((ply.y - center.y) * (1 + scaleUp)) + center.y;
    }
};
var moveUp = function(ply) {
    if (ply.back) {
        ply.y -= (1 - scaleDown * 2) * ply.speed;
    } else if (ply.middle) {
        ply.y -= ply.speed * (1 - scaleDown);
    } else if (ply.front) {
        ply.y -= ply.speed;
    }
};
var moveDown = function(ply) {
    if (ply.back) {
        ply.y += (1 - scaleDown * 2) * ply.speed;
    } else if (ply.middle) {
        ply.y += ply.speed * (1 - scaleDown);
    } else if (ply.front) {
        ply.y += ply.speed;
    }
};
var moveLeft = function(ply) {
    if (ply.back) {
        ply.x -= (1 - scaleDown * 2) * ply.speed;
    } else if (ply.middle) {
        ply.x -= ply.speed * (1 - scaleDown);
    } else if (ply.front) {
        ply.x -= ply.speed;
    }
};
var moveRight = function(ply) {
    if (ply.back) {
        ply.x += (1 - scaleDown * 2) * ply.speed;
    } else if (ply.middle) {
        ply.x += ply.speed * (1 - scaleDown);
    } else if (ply.front) {
        ply.x += ply.speed;
    }
};
var player1 = {
    x: 300,
    y: 125,
    front: true,
    size: 100,
    speed: 100,
    name: "juan",
    img: document.getElementById("water"),
};
var body = document.body;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//#270047
//#56009c
//#c28cff
ctx.fillStyle = "#c28cff";
var scaleDown = 0.2;
var scaleUp = 0.25;
var size = 200;
var center = {
    x: 500,
    y: 325
};
body.addEventListener("keydown", function(event) {
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
        moveLeft(player1);
    }
    if (event.key === "q" || event.key === "Q") {
        moveBack(player1);
    }
    if (event.key === "e" || event.key === "E") {
        moveFront(player1);
    }
});
var loop = function() {
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
};
window.requestAnimationFrame(loop);