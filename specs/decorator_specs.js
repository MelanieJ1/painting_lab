
const assert=require("assert");
const Decorator = require("../models/decorator.js")
describe("Decorator", function(){
    let decorator;
    beforeEach(function(){
        decorator= new Decorator ();
    })
    it ("should have a stock", function(){
        const actual = decorator.stock;
        assert.deepEqual(actual, [])
    })
    it("should add paint", function(){
        decorator.addPaint(1000);
        const actual = decorator.stock;
        assert.equal(actual, [1000])

    })
})
