// constructor
var Gadget = function() {};
// a static method
Gadget.isShiny = function() {
    return "you bet";
};
// a normal method added to the prototype
Gadget.prototype.setPrice = function(price) {
    this.price = price;
};