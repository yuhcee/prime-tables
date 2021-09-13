export function isPrime(num: number) {
  var prime = num !== 1; // Everything but 1 can be prime
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
