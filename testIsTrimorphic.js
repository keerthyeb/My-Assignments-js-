const isTrimorphic = require("../isTrimorphic.js").isTrimorphic;
const assert = require("assert");

assert.equal(true,isTrimorphic(49));
assert.equal(false,isTrimorphic(7));
assert.equal(true,isTrimorphic(5));
assert.equal(true,isTrimorphic(499));
assert.equal(true,isTrimorphic(0));
assert.equal(true,isTrimorphic(24));
assert.equal(true,isTrimorphic(25));
