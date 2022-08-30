
const Rooms = function(area){
    this.area = area;
    this.painted = false;
}
Rooms.prototype.checkPainted = function(){
    return this.painted;
}
Rooms.prototype.paintRoom = function(){
    this.painted = true
    return this.painted
}

module.exports = Rooms;