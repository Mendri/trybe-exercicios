let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bigNumber = 0;

for (let i = 0; i < numbers.length; i += 1) {
    
    if (bigNumber < numbers[i])  {
        bigNumber = numbers[i]
    }
}

console.log(bigNumber);