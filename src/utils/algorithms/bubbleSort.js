import swapPlacesWith from '../functions/swap'
import sleep from '../functions/sleep'

export default async function bubbleSort(bars, colors) {
    for (let i = 0; i < bars.length; i++) {
      for (let j = 0; j < (bars.length - 1 - i); j++) {
        bars[j].changeColor(colors.greenColor);
        bars[j+1].changeColor(colors.greenColor);
  
        // swap bars if j is taller than j+1
        if (bars[j].height > bars[j+1].height) {
          await sleep(300);
          swapPlacesWith(j, j+1, bars);
        }
        await sleep(300);
  
        // Change j back to blue as we are not considering it anymore
        bars[j].changeColor(colors.blueColor);
  
        // if highest value is in the back, change it to orange
        bars[j+1].changeColor(colors.orangeColor);
      }
    }
    bars[0].changeColor(colors.orangeColor);
}