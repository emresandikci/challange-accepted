/**
 *
 * 2) Write an async javascript function that writes every item in any given array with 1, 2,
    4, 8, … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
    seconds, “c” is printed in 4 seconds, ...
 *
 */

const printListByDelayAsync = (ms, listItem) => new Promise(() => setTimeout(() => {
    console.log(`item: ${listItem} - second: ${ms}`)
}, ms * 1000));

const letters = ["a", "b", "c", "d"];

function calculatePow(number, power) {
    let i = 1;
    let result = 1;
    while (i <= power) {
        result *= number;
        i++;
    }
    return result;
}

function writeList(arr = []) {
    arr.forEach(async (item, i) => {
        let second = calculatePow(2, i); // or Math.pow(2,i) 
        await printListByDelayAsync(second, item)
    });
}

writeList(letters);