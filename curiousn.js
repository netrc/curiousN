
const BI = require('big-integer');

"use strict";

exports.curiousn = function(n) {
    const tenPowerBI = BI("1" + "0".repeat(n));
    const twoPowerBI = BI(2).pow(n);
    const fiveBI = BI(5);
    const cn5 = fiveBI.modPow(twoPowerBI, tenPowerBI);
    const cn6 = tenPowerBI.minus(cn5).plus(1);

    return([cn5,cn6]);
}


// to analze first digit
curiousnFirstChar = function(n) {
    const cn = exports.curiousn(n);
    const cn5 = cn[0];
    cn5NewChar = cn5.toString().charAt(0);
    if (cn5.toString().length < n) {
        cn5NewChar = "0";
    }
    return cn5NewChar;
}

curiousnSmallInt = function(n) {    // "normal" javascript math
    const tenPower = Math.pow(10,n);
    const a = Math.pow(5,Math.pow(2,n)) % tenPower;    // the '5' value
    const b = tenPower - a + 1;          // the '6' value
    return [a,b];
}
