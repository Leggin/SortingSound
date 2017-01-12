var quaders = [];
var canvasWidth = 1000;
var quaderWidth = 8;
var numberQuads = canvasWidth / quaderWidth;
var sor;
var start = false;
var stilrunning = false;

function setup() {
    createCanvas(canvasWidth, 500);
    for (var i = 0; i < numberQuads; i++) {
        quaders[i] = new Quader(quaderWidth, floor(random(height)));
    }
    sor = new Sorter(quaders);
    frameRate(20);

}

function draw() {
    background(0);
    for (var i = 0; i < numberQuads; i++) {
        quaders[i].show(i * quaders[i].w, height - quaders[i].h);
    }

        stilrunning = sor.selectionSort();
}
