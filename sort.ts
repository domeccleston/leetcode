function swap(arr: number[], index1: number, index2: number) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

/* in-place sort, O(n^2) */
export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
      while (arr[i] < arr[j]) {
        swap(arr, i, j);
        j = j - 1;
        i = i - 1;
      }
  }
}
