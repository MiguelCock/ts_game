interface Vector {
    x: number;
    y: number;
}

var DrawBack = (obj: Objects | Player, vec?: Vector) => {
    if (vec !== undefined) {
        ctx.drawImage(obj.img, vec.x, vec.y, obj.size*(1-scaleDown*2), obj.size*(1-scaleDown*2));
    } else {
        ctx.drawImage(obj.img, obj.x, obj.y, obj.size*(1-scaleDown*2), obj.size*(1-scaleDown*2));
    }
}

var DrawMiddle = (obj: Objects | Player, vec?: Vector) => {
    if (vec !== undefined) {
        ctx.drawImage(obj.img, vec.x, vec.y, obj.size*(1-scaleDown), obj.size*(1-scaleDown));
    } else {
        ctx.drawImage(obj.img, obj.x, obj.y, obj.size*(1-scaleDown), obj.size*(1-scaleDown));
    }
}

var DrawFront = (obj: Objects | Player, vec?: Vector) => {
    if (vec !== undefined) {
        ctx.drawImage(obj.img, vec.x, vec.y, obj.size, obj.size);
    } else {
        ctx.drawImage(obj.img, obj.x, obj.y, obj.size, obj.size);
    }
}

var Draw = (obj: Objects | Player, size?: number) => {
    if (size !== undefined) {
        ctx.drawImage(obj.img, center.x, center.y, size, size);
    }
}
