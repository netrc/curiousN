
"use strict";

const cn = require('curiousn').curiousn;

// misc application code

const N = process.argv[2];

for (let n = 1; n <= N; n++) {
    console.log(n + ": " + cn(n));
}
