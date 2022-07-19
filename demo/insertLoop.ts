function insertelement() {
  let array = [1, 2, 4, 5, 6];
  let index = 2;
  let element = 3;
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  }
  console.log("after the given index", array);
  array[index] = element;
  console.log("after the given index", array);
}
export default insertelement;
