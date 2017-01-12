function Quader(qWidth, qHeight) {
    this.h = qHeight;
    this.w = qWidth;
    this.osc = new p5.Oscillator();
    this.osc.setType('sine');
    this.osc.freq(map(qHeight, 0, height, 300, 2000));
    this.osc.amp(120);

    this.show = function (xPos, yPos) {
        fill(255, 150);
        rect(xPos, yPos, this.w, this.h);

    }

    this.playSound = function () {
        this.osc.start();
        this.osc.stop(0.04);
    }

}
