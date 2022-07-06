export class Queue {
  arr: number[];
  // MAX: number;

  constructor(max: number) {
    this.arr = [];
    // this.MAX = max;
  }

  enqueue(number: number): void {
    this.arr.push(number);
    // if (this.arr.length < this.MAX) {

    // } else {
    //   throw Error("Queue is Full");
    // }
  }
  dequeue(): number {
    if (this.arr.length > 0) {
      let elm = this.arr[0];
      this.arr.slice(1, this.arr.length);
      return elm;
    } else {
      throw Error("Queue is empty");
    }
  }
}
