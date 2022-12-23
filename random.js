function random(n, m) {
  let result = Math.random() * (m - n) + n;
  return result;
}
const res = random(1, 10);
console.log(res);

// map forEach reduce filter some every find
// push pop unshift shift sort reverser  flat slice splice(3,1)
const arr = [1, 2, 3, 3, 4, 4, 5, 5];

for (let k, len = arr.length; k < len; k++) {
  if (arr[k] % 2 === 0) {
    console.log(arr.splice(k, 1));
  }
}
// arr = arr.filter((item) => item % 2 !== 0);
console.log(arr);
