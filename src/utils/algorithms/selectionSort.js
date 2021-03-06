import swapPlacesWith from '../functions/swap'
import sleep from '../functions/sleep'

export default async function selectionSort(bars, colors) {
    for (let i = 0; i < bars.length; i++) {
      // Let min index be the first element and color it red
      let min_index = i;
      await sleep(500);
      bars[i].changeColor(colors.red);
      await sleep(500);
      for (let j = i+1; j < bars.length; j++) {
          // Color bar green as it is being considered
          bars[j].changeColor(colors.green);
          await sleep(500);
          // Check if current bar is smaller than min_index
          if (bars[min_index].height > bars[j].height) {
            if (min_index !== i) {
              bars[min_index].changeColor(colors.blue);
            }
            min_index = j;
            bars[min_index].changeColor(colors.red);
          } else {
            // Back to blue as it is not considered anymore
            bars[j].changeColor(colors.blue);
          }
      }
      // If min_index is already first index, no need for swapping
      if (min_index === i) {
        bars[i].changeColor(colors.orange);
      } else {
        // Now swap min index and i
        await sleep(500)
        swapPlacesWith(min_index, i, bars);
        await sleep(300)
        bars[i].changeColor(colors.orange);
        bars[min_index].changeColor(colors.blue);
      }
    }
}