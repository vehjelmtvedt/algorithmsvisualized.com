import Bar from '../utils/Bar'
import random from 'random'


export default function sketch(p){
  // Color Variables
  let blueColor;
  let greenColor;
  let redColor;
  let orangeColor;

    let canvas;
    let bars = [];
    let values = [];
    let BAR_WIDTH = 60;

    p.setup = () => {
      canvas = p.createCanvas(900, 900);
      p.noStroke();

      // Set up colors
      blueColor = p.color(158, 207, 224);
      greenColor = p.color(16, 112, 1);
      redColor = p.color(208, 0, 46);
      orangeColor = p.color(253, 148, 8);


      for (let i = 0; i < 10; i++) {
        let height = random.int(0,150);
        values[i] = height;
        bars.push(new Bar(i*BAR_WIDTH, height, blueColor));
      }
    }

    p.draw = () => {
      p.background(255, 255, 255);
      for (let i = 0; i < bars.length; i++) {
        console.log(bars);
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
        bar.colorGradient += 0.05;
  
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

    

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
        bars[0].move(1);
        console.log(bars);
    }

    
}




// p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    // }