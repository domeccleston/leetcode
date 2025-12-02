function getDecimals(num: number): number[] {
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
  "900": "CM",
  "500": "D",
  "400": "CD",
  "100": "C",
  "90": "XC",
  "50": "L",
  "40": "XL",
  "10": "X",
  "9": "IX",
  "5": "V",
  "4": "IV",
  "1": "I",
};

function extract(decimal: number) {
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
