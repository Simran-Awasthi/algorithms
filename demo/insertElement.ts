function insertElement() {
  let array = [1, 2, 3, 4, 5];
  let index = 3;
  let Element = 5;
  console.log("before insertion: ", array);
  array.splice(index, 0, Element);
  console.log("after insertion: ", array);
}
export default insertElement;
