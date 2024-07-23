// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newArray = [...cats, name];
  return newArray;
}

function prependCat(name) {
  const newArray = [name, ...cats];
  return newArray;
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}
