import { Queue } from "./utiils/queue";

function radixSort(arr: number[], n: number) {
  let max = Math.max(...arr) * 10;
  //   let k = countDigit(max);

  let D = 10;
  while (D < max) {
    let buckets: number[][] = [...Array(10)].map(() => []);
    let Q: Array<Queue> = [];
    for (var i = 0; i < 10; i++) {
      let queue = new Queue(max);
      Q.push(queue);
    }
    for (var i = 0; i < n; i++) {
      let t = Math.floor((arr[i] % D) / (D / 10));
      Q[t].enqueue(arr[i]);
    }
    let temp: number[] = [];
    arr = temp.concat.apply(
      temp,
      Q.map((e) => e.arr)
    );
    D = D * 10;
  }
  return arr;
}

function countDigit(n: number) {
  let count = 0,
    temp = n;
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
  }
  return count;
}

export default radixSort;
export { countDigit };
