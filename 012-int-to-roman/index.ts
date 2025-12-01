// extract the parts of a number as an array: 3789 -> [3000, 700, 80, 9]
function getDecimals(num: number) {
  return num
    .toString()
    .split("")
    .map((el, i, arr) => ({
      num: Number(el),
      zeros: arr.length - i,
    }))
    .map((el) => parseInt(el.num.toString() + "0".repeat(el.zeros - 1)));
}

const numerals = {
  "1000": "M",
  "500": "D",
  "100": "C",
  "50": "L",
  "10": "X",
  "5": "V",
  "1": "L",
};

function extract(decimal: number) {
  // until we consume the whole number:
  // take the largest possible bite out of it, working through our roman values from largest to smallest
  let current = decimal;
  let roman = "";

  const entries = Object.entries(numerals)
    .map(([v, r]) => [parseInt(v), r] as [number, string])
    .sort((a, b) => b[0] - a[0]); // sort descending

  while (current > 0) {
    for (const [value, symbol] of entries) {
      if (current >= value) {
        current -= value;
        roman += symbol;
        break;
      }
    }
  }

  return roman;
}

function intToRoman(num: number) {
  const decimals = getDecimals(num);
  let roman = "";

  for (const decimal of decimals) {
    const part = extract(decimal);
    roman += part;
  }

  return roman;
}

console.log(intToRoman(3789));
