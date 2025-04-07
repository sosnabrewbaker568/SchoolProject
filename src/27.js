function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2 || num % 2 === 0) return true;

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(15)); // Output: false
