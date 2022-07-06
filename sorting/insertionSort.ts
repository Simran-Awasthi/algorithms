function insertionSort(arr: number[], n: number) {
  let key, k, i;
  for (i = 1; i <= n - 1; i++) {
    key = arr[i];
    k = i;
    while (k > 0 && arr[k - 1] > key) {
      arr[k] = arr[k - 1];
      k = k - 1;
    }
    arr[k] = key;
  }
}
export default insertionSort;
