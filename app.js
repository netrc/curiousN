
"use strict";

cn = require('curiousn').curiousn;
bi = require('big-integer');

// misc application code

N = process.argv[2];

for (n = 1; n <= N; n++) {
    console.log(n + ": " + cn(n));
}
