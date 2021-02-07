//1) Write a javascript function that finds the duplicate items in any given array.

const numbers = [1, 2, 3, 4, 5, 5, 3];

//with filter function
function findDuplicateItems(items = []) {
    const duplicated = items.filter((item, index) => items.indexOf(item) !== index);
    console.log(duplicated);

}
findDuplicateItems(numbers);

//without filter function
function findDuplicateItemsWithoutFilter(items = []) {
    const duplicated = [];
    for (let index = 0; index < items.length; index++) {
        const current = items[index];
        let counter = 0;
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (current === element) {
                counter++;
            }
            if (counter > 1) {
                if (duplicated.indexOf(current) == -1) {
                    duplicated.push(element)
                }
                break;
            }
        }
    }
    console.log(duplicated);
}

// findDuplicateItemsWithoutFilter(numbers);