
const assert = require('assert');
const Paint = require('../models/paint.js');

describe ("Paint", function(){
    let paint;
    beforeEach(function(){
        paint = new Paint(1000);
    });
    it ("should have an amount", function(){
        const actual=paint.amount;
        assert.strictEqual(actual, 1000)
    })
    it ("should check if empty", function(){
        const actual=paint.checkEmpty();
        assert.equal(actual, false)
    })
    it("should empty paint", function(){
        const actual=paint.emptyPaint();
        assert.equal(actual, 0)
    })
});


