function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    console.log({ left, right });

    const mid = Math.floor((left + right) / 2);

    console.log({ candidate: arr[mid] });

    if (arr[mid] === target) {
      return mid; // Found it
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return -1; // Not found
}

function binarySearchFirst(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      right = mid - 1; // Keep searching left for first occurrence
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

function binarySearchInsert(arr: number[], target: number): number[] {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  arr.splice(left, 0, target);
  return arr;
}

const largeArray = [
  ...Array.from({ length: 100 }, (_, i) => i),
  ...[55, 55, 55],
].sort((a, b) => a - b);
console.log(binarySearchInsert(largeArray, 56));
