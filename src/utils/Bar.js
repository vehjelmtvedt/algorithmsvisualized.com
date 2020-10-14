var sleep = require('sleep');

export default class Bar {
    constructor(xCoordIn, heightIn, startColor) {
        this.xCoord = xCoordIn;
        this.yCoord = 150;
        this.height = heightIn;
        this.color = startColor;
        this.nextColor = startColor;
        this.colorGradient = 0;
        this.changingColor = false;
    }

    get x() {
        return this.xCoord;
    }

    get y() {
        return this.yCoord;
    }

    get _height() {
        return this.height;
    }

    set x(xIn) {
        this.xCoord = xIn;
    }

    set y(yIn) {
        this.yCoord = yIn;
    }

    get _changingColor() {
        return this.changingColor;
    }

    get _color() {
        return this.color;
    }

    get _nextColor() {
        return this.nextColor;
    }

    get _colorGradient() {
        return this.colorGradient;
    }

    // Moves the bar to a given index's position
    async move(index) {
        // let targetxPos = index * 60;
  
        // // If bar is already at that position we return
        // if (targetxPos === this.x) {
        //   return;
        // } else {
        //   let distance = targetxPos - this.x;
        //   while (targetxPos !== this.x) {
        //     // Change the xCoord in tenths of the distance we have to cover every 10ms
        //     this.x += distance / 10;
        //     await this.sleep(100);
        //   }
        // }
        this.x = index * 60;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}