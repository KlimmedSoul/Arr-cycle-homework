const numbersArray = [1231, 6456, 43232, 1424, 1124, 5636, 84534, 22637, 3437, 3673];
let sortedNumbersArray = [];
let indexMin = 0;
let hi = 0;
for (let i = 0; i < 10; i++) {
    indexMin = numbersArray.indexOf(Math.min.apply(null, numbersArray));
    sortedNumbersArray.push(Math.min.apply(null, numbersArray));
    numbersArray.splice(indexMin, 1);
}
console.log('Числа в порядке возрастания', sortedNumbersArray);
//
// Решил сделать так, т.к. мы прошли массивы и циклы. Я использовал массивы и циклы, а не if-else
//