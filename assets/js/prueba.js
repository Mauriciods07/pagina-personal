/* const array = [1,2,3,4,5];

console.log(array);

function sum(x, y, z) {
    return x + y + z;
  }

console.log(sum(...array)); */

var person = Object.create({
  name: "SG",
  heigth: "5.3"
});

delete person.heigth;

console.log(person.heigth);