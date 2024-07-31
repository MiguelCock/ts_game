interface Objects extends Vector{
    size: number;
    name: string;
    img: CanvasImageSource;
}

var dirt: Objects = {
    x: 450, 
    y: 250,
    name: "dirt",
    size: 100,
    img: document.getElementById("dirt") as CanvasImageSource
};

var grass: Objects = {
    x: 450, 
    y: 250,
    name: "grass",
    size: 100,
    img: document.getElementById("grass") as CanvasImageSource
}

var stone: Objects = {
    x: 450, 
    y: 250,
    name: "stone",
    size: 100,
    img: document.getElementById("stone") as CanvasImageSource
}