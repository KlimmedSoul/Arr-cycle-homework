const numberArray = [-123, 25523, 235, 13212, -67345, 3346, 7784, 5645, 7457, 2632];
let maxNumber = 0;
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > maxNumber)
        maxNumber = numberArray[i]
}
console.log(maxNumber)