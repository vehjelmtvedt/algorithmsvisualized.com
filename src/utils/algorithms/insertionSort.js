import swapPlacesWith from '../functions/swap'
import sleep from '../functions/sleep'

export default async function insertionSort(bars, colors) {
    // mark first element as sorted (ORANGE)
    // for each unsorted element X
        // extract X (RED)
        // for j = lastSortedIndex down to 0:
            // if current element j > x (J = GREEN)
                // move sorted element to the right by 1
            // break loop and insert X here


    for (let i = 1; i < bars.length; i++) {
        bars[i-1].changeColor(colors.orange);
        await sleep(1000);
        bars[i].changeColor(colors.red);
        await sleep(1000);
        for (let j = i; j >= 1; j--) {
            await sleep(1000);
            bars[j-1].changeColor(colors.green);
            await sleep(1000);
            if (bars[j-1].height > bars[j].height) {
                await sleep(1000);
                swapPlacesWith(j-1, j, bars); // swap the bars since previous is higher than current
                await sleep(1000);
                bars[j].changeColor(colors.orange);
                await sleep(1000);
            } else {
                await sleep(1000);
                bars[j].changeColor(colors.blue);
                await sleep(1000);
                bars[j-1].changeColor(colors.blue);
                await sleep(1000);
                break;
            }
        }
    }
}