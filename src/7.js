
const getRandomJavascriptCode = () => {
  const array = ["let x = 5;", "function add(x, y) {return x + y}", "class MyClass {}"];
  return array[Math.floor(Math.random() * array.length)];
}