/* 
    An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
    Given an array arr[] of size N, Return the index of any one of its peak elements.
    Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0.
 
    Link: https://practice.geeksforgeeks.org/problems/peak-element/1
*/

function peak(arr: number[], n: number) {
  for (var i = 0; i < n; i++) {
    if (i == 0) {
      if (arr[i] > arr[i + 1]) return i;
    } else if (i == n - 1) {
      if (arr[i] > arr[i - 1]) return i;
    } else {
      if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
        return i;
      }
    }
  }
  return -1;
}
export default peak;
