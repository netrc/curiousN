
const cn = require("./curiousn.js");
const BI = require("big-integer");
const tape = require("tape");

tape('curiousN tests', function(t) {
    z = cn.curiousn(3);
    t.ok(z[0].equals(625), 'cn(3)5 correct');
    t.ok(z[1].equals(376), 'cn(3)6 correct');
    t.equal(z[0].toString().length,3, 'cn(3)5 length correct');
    t.equal(z[1].toString().length,3, 'cn(3)6 length correct');

    z = cn.curiousn(20);
    t.ok(z[0].equals(BI("92256259918212890625")), 'cn(20)5 correct');
    t.ok(z[1].equals(BI("7743740081787109376")), 'cn(20)6 correct');
    t.equal(z[0].toString().length,20, 'cn(20)5 length correct');
    t.equal(z[1].toString().length,19, 'cn(20)6 length correct');

    t.end();
});
