// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.




function digPow(n, p){
  let k = n.toString().split('').map(function(elem, index){
    return Math.pow(elem, index +p);                                  
    }).reduce(function(prev, curr){
      return prev + curr;
    },0) / n;
return Number.isInteger(k) ? k : -1
}