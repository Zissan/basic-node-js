const fe = require("./fe");
const assert = require("assert").strict;

assert.equal(fe("test.test.js"), "js", `FAILED`);
