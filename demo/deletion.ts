function deleteElement() {
  let array = [1, 2, 3, 5, 6];
  let index = 2;
  console.log("before deletion", array);
  for (var i = index + 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array.pop();
  console.log("after deletion", array);
}
export default deleteElement;
