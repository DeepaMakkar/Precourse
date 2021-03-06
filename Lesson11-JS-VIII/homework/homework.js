// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  let factorial = 1;
  factRecursion(n);
  function factRecursion(i){
    if(i<1){
      return;
    }
    factorial = i * factorial;
    factRecursion(i-1);
  }
  return factorial;
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if(n<=1){
    return n;
  }
  return (nFibonacci(n-1) + nFibonacci(n-2));
  
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
