export function fibonacciWASM(n: i32): i32 {
  var a = 0, b = 1
  if (n > 0) {
    while (--n) {
      let t = a + b
      a = b
      b = t
    }
    return b
  }
  return a
}

export function fibonacciWASMTimes(n: i32, t:i32): void {
  for (let index = 0; index < t; index++) {
    fibonacciWASM(n);
  }
}

export function sortWASM(arr: StaticArray<f32>): StaticArray<f32> {
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (unchecked(arr[j - 1]) > unchecked(arr[j])) {
        const temp = unchecked(arr[j - 1]);
        unchecked((arr[j - 1] = unchecked(arr[j])));
        unchecked((arr[j] = temp));
      }
    }
  }
  return arr;
}

export function newStaticArray(length: i32): StaticArray<f32> {
  return new StaticArray<f32>(length);
}
