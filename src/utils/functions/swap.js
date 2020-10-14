// Swap places of this bar with another, given by its index
export default function swapPlacesWith(indexOriginal, indexToSwap, bars) {
    // First move them on the screen
    bars[indexToSwap].move(indexOriginal)
    bars[indexOriginal].move(indexToSwap);
  
    // Then swap their indices
    swapIndicesWith(indexOriginal, indexToSwap, bars);
}
  
function swapIndicesWith(indexOriginal, indexSwap, bars) {
    let tempBar = bars[indexSwap];
    bars[indexSwap] = bars[indexOriginal];
    bars[indexOriginal] = tempBar;
}