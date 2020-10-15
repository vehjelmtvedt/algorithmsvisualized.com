import swapPlacesWith from '../functions/swap'
import sleep from '../functions/sleep'

export default async function insertionSort(bars, colors) {
    for (let i = 1; i < bars.length; i++) {
        bars[i-1].changeColor(colors.orange);
        await sleep(500);
        bars[i].changeColor(colors.red);
        bars[i].select();
        for (let j = i; j >= 1; j--) {
            bars[j-1].changeColor(colors.green);
            await sleep(500);
            if (bars[j-1].height > bars[j].height) {
                swapPlacesWith(j-1, j, bars); // swap the bars since previous is higher than current
                await sleep(500);
                bars[j].changeColor(colors.orange);
                if (j === 1) {
                  bars[0].changeColor(colors.orange);
                  bars[0].deselect();
                }
            } else {
                await sleep(200);
                bars[j].changeColor(colors.orange);
                bars[j].deselect();
                bars[j-1].changeColor(colors.orange);
                await sleep(500);
                break;
            }
        }
    }
}
