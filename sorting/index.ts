import bubbleSort from "./bubbleSort";
import countingSort from "./countingSort";
import insertionSort from "./insertionSort";
import mergeSort from "./mergeSort";
import mergeSortAlt from "./mergeSortalt";
import selectionSort from "./selectionSort";
import radixSort, { countDigit } from "./radixSort";
import { Queue } from "./utiils/queue";
let arr: number[] = [];
for (var i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 1000);
  arr.push(num);
}
console.time("sorting time");
let res = radixSort(arr, arr.length);
console.log(res);
console.timeEnd("sorting time");

// let queue = new Queue(10);
// queue.enqueue(10);
// queue.enqueue(20);
// let res = queue.dequeue();
// console.log(res);
