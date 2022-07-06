function partition(arr: number[], p: number, q: number) {
  let i, j, temp;
  let pivot = arr[q];
  let pindex = p;
  for (i = p; i < q - 1; i++) {
    if (arr[i] <= pivot) {
      temp = arr[p];
      arr[p] = arr[q];
      arr[q] = temp;
    }
  }
}
