
const Paint = function(amount){
    this.amount = amount;
    this.empty = false;
}
Paint.prototype.checkEmpty = function(){
    if (this.amount < 0) 
    {this.empty = true}
    else {
        this.empty = false
    }
    return this.empty
    
}

Paint.prototype.emptyPaint= function(){
    this.amount = 0
    return this.amount
}

module.exports = Paint;