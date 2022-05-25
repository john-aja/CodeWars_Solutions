// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.


function isPrime(number) {
  if (number <= 1) {
   return false;
  }

  if (number <= 3) {
   return true;
  }

  if (number % 2 == 0 || number % 3 == 0) {
   return false;
  }

  for (let i = 5; i * i <=number; i = i + 6) {
    if (number % i == 0 || number % (i + 2) == 0)
    return false;
  }

  return true;
}