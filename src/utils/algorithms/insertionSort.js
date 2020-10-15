import swapPlacesWith from '../functions/swap'
import sleep from '../functions/sleep'

export default async function insertionSort(bars, colors) {
    // mark first element as sorted
    
    // for each unsorted element X
        // extract X
        // for j = lastSortedIndex down to 0:
            // if current element j > x
                // move sorted element to the right by 1
            // break loop and insert X here


    for (let i = 0; i < bars.length; i++) {
        bars[i].select();
        await sleep(100);
    }

}