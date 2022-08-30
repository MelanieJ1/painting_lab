
const assert = require("assert")
const Rooms = require("../models/rooms.js")
describe("Rooms", function(){
    let rooms;
    beforeEach (function(){
        rooms = new Rooms("100", false)
    })
    it("should have an area", function(){
        const actual= rooms.area;
        assert.equal(actual, 100);
    })
    it("should check if painted", function(){
        const actual= rooms.checkPainted();
        assert.equal(actual, false);
    })
    it("should check after room painted", function(){
        const actual= rooms.paintRoom();
        assert.equal(actual, true);
    })
})