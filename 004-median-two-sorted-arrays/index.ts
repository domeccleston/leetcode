function isEvenLength(num: number[]) {
  return num.length % 2 === 0;
}

function mergeArrays(arr1: number[], arr2: number[]) {
  return [...arr1, ...arr2];
}

function calculateMedian(arr: number[]) {
  let lowerMid: number | null = null;
  let upperMid: number | null = null;

  if (!isEvenLength(arr)) {
    lowerMid = (arr.length - 1) / 2;
    return arr[lowerMid];
  } else {
    lowerMid = arr.length / 2 - 1;
    upperMid = lowerMid + 1;
    return (arr[lowerMid] + arr[upperMid]) / 2;
  }
}

function findMedianSortedArrays(arr1: number[], arr2: number[]) {
  if (!arr1.length && !arr2.length) {
    throw new Error(
      "At least one array arg must have a length greater than or equal to one",
    );
  }
  const merged = mergeArrays(arr1, arr2);
  merged.sort((a, b) => a - b);
  const result = calculateMedian(merged);
  return result;
}

const merged1 = [1];
const merged2 = [1, 2, 3];
const merged3 = [1, 2, 3, 4, 5];
const merged4 = [1, 2, 3, 4, 5, 6, 7];
const merged5 = [1, 2, 3, 4];

const split1 = [[0, 1], [2]];
const split2 = [
  [1, 2, 3],
  [4, 5],
];
const split3 = [
  [1, 2],
  [3, 4],
];
const repeats = [
  [1, 1],
  [2, 2],
];
const repeats2 = [
  [1, 1, 1],
  [2, 2, 3],
];
const same = [
  [1, 1, 1],
  [1, 1],
];
const empty = [[], []]; // error
const one = [[], [1]];
const large = [
  Array.from({ length: 100 }, (_, i) => i),
  Array.from({ length: 100 }, (_, i) => i + 100),
];
const twoBig = [[10000], [10001]];

const interleaved = [
  [1, 3, 5],
  [2, 4, 6],
]; // -> [1, 2, 3, 4] | [5, 6] -> [1, 2, 3, 4, 5, 6] -> 3.5

// length: 6
// even number, so we want two partitions of length 4 and 2
// [1, 2, 3, 4], [5, 6]
// we need to avoid iterating across the whole array
// has to be a binary search appraoch: keep subdividing array

const negative = [
  [-5, -3, -1],
  [0, 1, 2],
];

const tests = [
  split1,
  split2,
  split3,
  repeats,
  repeats2,
  same,
  large,
  twoBig,
  interleaved,
  negative,
];

// tests.forEach((arr) => {
//   const [arr1, arr2] = arr;
//   console.log(twoSortedArrays(arr1, arr2));
// });

//
//
//
// arrays: [1, 3, 8] | [2, 4, 7, 9]
// merged: [1, 2, 3, 4, 7, 8, 9]
// splits: [1, 2, 3], [4], [7, 8, 9]
// median: 4
//
