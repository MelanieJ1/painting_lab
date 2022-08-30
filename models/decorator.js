const Decorator= function(){
    this.stock = []
}

Decorator.prototype.paintLitrage = function(){
    let total = 0
    for (paint in this.stock) {
        total += paint.amount

    }
    return total
}

Decorator.prototype.addPaint = function(paint){
    this.stock.push(paint);
}

module.exports=Decorator;