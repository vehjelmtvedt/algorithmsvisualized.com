import Bar from '../utils/Bar'
import random from 'random'
//import bubbleSort from '../utils/algorithms/bubbleSort'
import selectionSort from '../utils/algorithms/selectionSort'
import bubbleSort from '../utils/algorithms/bubbleSort'
import insertionSort from '../utils/algorithms/insertionSort'


export default function sketch(p){


  // Color Variables
    let blue;
    let green;
    let red;
    let orange;
    let colors;

    let canvas;
    let bars = [];
    let values = [];
    let BAR_WIDTH = 60;


    p.setup = () => {
      canvas = p.createCanvas(900, 450);
      reset()
    }

    function reset() {
        p.noStroke();

        // Set up colors
        blue = p.color(158, 207, 224);
        green = p.color(16, 112, 1);
        red = p.color(208, 0, 46);
        orange = p.color(253, 148, 8);

        colors = {
            blue,
            green,
            red,
            orange
        }


        for (let i = 0; i < 15; i++) {
            let height = random.int(0,150);
            values[i] = height;
            bars.push(new Bar(i*BAR_WIDTH, height, blue));
        }
    }

    p.draw = () => {
        p.background(255, 255, 255);
        for (let i = 0; i < bars.length; i++) {
            drawBar(bars[i]);
        }
    }

    function drawBar(bar) {
        p.fill(getColor(bar));
        p.noStroke();
        p.rect(bar.x, bar.y, BAR_WIDTH - 10, -bar.height);
    }

    function getColor(bar) {
        if (bar.changingColor) {
            var color = p.lerpColor(bar.color, bar.nextColor, bar.colorGradient);
            bar.colorGradient += 0.07;

        // If colorGradient is 1.0, the color change is complete
        if (bar.colorGradient > 1) {
            bar.color = bar.nextColor;
            bar.changingColor = false;
            bar.colorGradient = 0;
        }
        return color
        } else {
            return bar.color;
        }
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
        if(canvas) { //Make sure the canvas has been created
            // Decide which algorithm from newProps
            if (newProps.reset === "true") {
               bars = [];
               reset();
               return;
            }
            if (newProps.algo === "bubble") {
                bubbleSort(bars, colors);
            } else if (newProps.algo === "selection") {
                selectionSort(bars, colors);
            } else if (newProps.algo === "insertion") {
                insertionSort(bars, colors);

            }
        } else {
            return;
        }
    }
}
