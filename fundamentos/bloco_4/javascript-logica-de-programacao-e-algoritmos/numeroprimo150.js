let biggerPrime = 0;
let number = 50;

for (let i = 0; i <= number; i += 1) {
    
    let isPrime = true;

    for(let i2 = 2; i2 < i; i2 += 1) {
        
        if (i % i2 === 0) {
            isPrime = false;
        }
    }

    if (isPrime === true ) {
        biggerPrime = i;
    }

    console.log(biggerPrime)
}