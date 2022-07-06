function merge(arr: number[], p: number, q: number, r: number) {
  let n1 = q - p;
  let n2 = r - q - 1;
  let a: number[] = [],
    b: number[] = [];

  let i = 0;
  let j = 0;
  let k = 0;
  for (i = 0; i <= n1; i++) {
    a[i] = arr[p + i];
  }
  a[i] = Infinity;
  for (j = 0; j <= n2; j++) {
    b[j] = arr[q + j + 1];
  }
  b[j] = Infinity;
  i = 0;
  j = 0;
  for (k = p; k <= r; k++) {
    if (a[i] <= b[j]) {
      arr[k] = a[i];
      i++;
    } else {
      arr[k] = b[j];
      j++;
    }
  }
}

function mergeSort(arr: number[], p: number, r: number) {
  if (p < r) {
    var q = Math.floor((p + r) / 2);
    mergeSort(arr, p, q);
    mergeSort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}
export default mergeSort;
