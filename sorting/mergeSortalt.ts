function merge(arr: number[], p: number, q: number, r: number) {
  let temp: Array<number> = [];
  let i = p,
    j = q + 1,
    k = p;
  while (i <= q && j <= r) {
    if (arr[i] > arr[j]) {
      temp[k++] = arr[j++];
    } else {
      temp[k++] = arr[i++];
    }
  }
  if (i > q) {
    while (j <= r) {
      temp[k++] = arr[j++];
    }
  } else {
    while (i <= q) {
      temp[k++] = arr[i++];
    }
  }
  for (i = p; i <= r; i++) {
    // if (temp[i]) {
    arr[i] = temp[i];
    // }
  }
}

function mergeSortAlt(arr: number[], p: number, r: number) {
  if (p < r) {
    var q = Math.floor((p + r) / 2);
    mergeSortAlt(arr, p, q);
    mergeSortAlt(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}
export default mergeSortAlt;
