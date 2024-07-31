interface GameChunk {
    layer1: number[][];
    layer2: number[][];
    layer3: number[][];
}

var mapa: GameChunk = {
    layer1: [[0,1,0,0],
            [1,2,1,1],
            [1,0,1,0],
            [1,2,1,3]],

    layer2: [[0,1,0,0],
            [1,2,1,3],
            [2,0,1,0],
            [1,1,1,1]],

    layer3: [[0,1,0,0],
            [3,1,2,1],
            [1,0,2,0],
            [1,2,1,1]],
};

var DrawChunkBack = (chunk: GameChunk) => {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            switch (chunk.layer3[j][i]) {
                case 1:
                    DrawBack(dirt, {x: i*dirt.size*(1-scaleDown*2) + center.x, y:j*dirt.size*(1-scaleDown*2) + center.y})
                    break;
                case 2:
                    DrawBack(grass, {x: i*grass.size*(1-scaleDown*2) + center.x, y:j*grass.size*(1-scaleDown*2) + center.y})
                    break;
                case 3:
                    DrawBack(stone, {x: i*stone.size*(1-scaleDown*2) + center.x, y:j*stone.size*(1-scaleDown*2) + center.y})
                    break;
                default:
                    break;
            }
        }
    }
}

var DrawChunkMiddle = (chunk: GameChunk) => {
    if (player1.back) {
        ctx.globalAlpha = 0.4;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            switch (chunk.layer2[j][i]) {
                case 1:
                    DrawMiddle(dirt, {x: i*dirt.size*(1-scaleDown) + center.x, y:j*dirt.size*(1-scaleDown) + center.y})
                    break;
                case 2:
                    DrawMiddle(grass, {x: i*grass.size*(1-scaleDown) + center.x, y:j*grass.size*(1-scaleDown) + center.y})
                    break;
                case 3:
                    DrawMiddle(stone, {x: i*stone.size*(1-scaleDown) + center.x, y:j*stone.size*(1-scaleDown) + center.y})
                    break;
                default:
                    break;
            }
        }
    }
    ctx.globalAlpha = 1;
}

var DrawChunkFront = (chunk: GameChunk) => {
    if (player1.middle) {
        ctx.globalAlpha = 0.4;
    } else if (player1.back) {
        ctx.globalAlpha = 0.1;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            switch (chunk.layer1[j][i]) {
                case 1:
                    DrawFront(dirt, {x: i*dirt.size + center.x, y:j*dirt.size + center.y})
                    break;
                case 2:
                    DrawFront(grass, {x: i*grass.size + center.x, y:j*grass.size + center.y})
                    break;
                case 3:
                    DrawFront(stone, {x: i*stone.size + center.x, y:j*stone.size + center.y})
                    break;
                default:
                    break;
            }
        }
    }
    ctx.globalAlpha = 1;
}