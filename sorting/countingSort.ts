import { emitKeypressEvents } from "readline";

function countingSort(arr: number[], n: number, k: number) {
  let i: number,
    j: number,
    c: number[] = [],
    b: number[] = [];
  for (i = 0; i < n; i++) {
    b.push(-1);
  }
  for (i = 0; i < k; i++) {
    c.push(0);
  }
  for (j = 0; j < n; j++) {
    c[arr[j]] = c[arr[j]] + 1;
  }
  for (i = 1; i < k; i++) {
    c[i] = c[i] + c[i - 1];
  }
  for (j = 0; j < n; j++) {
    b[c[arr[j]]] = arr[j];
    c[arr[j]] = c[arr[j]] - 1;
  }
  return b;
}
export default countingSort;
