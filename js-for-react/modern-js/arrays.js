const array1 = [1, 2, 3, 4, 5];

// Spread operator
const array2 = [...array1, 6, 7, 8, 9, 10];
console.log(array2);

// Maetodo Map 
const array3 = array2.map((number) => {
    return number;
});
console.log(array3);