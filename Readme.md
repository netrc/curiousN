

# Curious/Automorphic Number

An N-digit number X, such that the last N-digits of X^2 == X

e.g. 2-digit "25",  25^2 is 625.

## Usage

const cn = require('curiousn').curiousn;

const ansArray = cn(2);

// there are always 2 curious numbers of length N, so you get an array

// because the curious numbers get big quick, we use "big-integer"
// which means you need toString() to see the value

console.log( ansArray[0].toString() );


## Notes

See

* http://www.johndcook.com/blog/2016/02/15/curious-numbers/
