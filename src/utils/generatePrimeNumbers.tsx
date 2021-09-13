import { isPrime } from './isPrime';

export const generatePrimeNumbers = (input: number): Array<number> => {
  const primeNumbers: Array<number> = [];

  for (let index = 2; index < input; index++) {
    if (isPrime(index)) {
      primeNumbers.push(index);
    }
  }
  return primeNumbers;
};
