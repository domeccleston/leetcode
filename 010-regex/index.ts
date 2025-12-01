function matchWildcard(str: string, pattern: string) {
  if (pattern.length !== str.length) return false;
  for (let i = 0; i < str.length; i++) {
    if (pattern[i] !== str[i] && pattern[i] !== ".") return false;
  }
  return true;
}

function matchStar(str: string, pattern: string) {
  console.log(str, pattern)
  for (let i = 0; i < str.length; i++) {
    while (str[i] === pattern[pattern.length - 1]) {
      i++;
    }
    if (pattern[i] !== str[i] && pattern[i] !== ".") return false;
  }
  return true;
}

function matchRegex(str: string, pattern: string) {
  for (let i = 0; i < str.length; i++) {
    if (pattern[i] === "*") {
      let result = matchStar(str.slice(0, i), pattern.slice(i - 1, i + 1));
      console.log(str.slice(0, i));
    }
  }
}

// console.log(matchRegex("meow", "meo*w"));
console.log(matchRegex("meoooooooow", "meo*w"));
// console.log(matchRegex("aab", "a*b"));
