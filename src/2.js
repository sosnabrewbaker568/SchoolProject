// This function takes a string as input and returns a randomized version of it
function randomizeString(str) {
  // Split the string into an array of individual characters
  const chars = str.split('');
  // Create a new array with the same number of elements as the input string, but with each element being a random character from the input string
  const randomChars = chars.map(char => {
    const randIndex = Math.floor(Math.random() * chars.length);
    return chars[randIndex];
  });
  // Join the array of random characters back into a single string
  return randomChars.join('');
}
