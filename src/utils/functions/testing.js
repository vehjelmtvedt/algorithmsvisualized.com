import sleep from './sleep'

export default async function testing(bar) {
    console.log("BAR Y: " + bar.y);
    bar.select();
    console.log("BAR Y: " + bar.y);
    await sleep(2000);
    bar.deselect();
    console.log("BAR Y: " + bar.y);
}
