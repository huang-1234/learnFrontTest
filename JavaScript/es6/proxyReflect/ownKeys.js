const object1 = {
  property1: 42,
  property2: 13,
  sayHi() {
    console.log('Hello world');
  }
};

const array1 = [];

console.log(Reflect.ownKeys(object1));
// expected output: Array ["property1", "property2"]

console.log(Reflect.ownKeys(array1));
// expected output: Array ["length"]