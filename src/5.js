function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = getRandomInt(1, 50);
console.log(randomNumber);
