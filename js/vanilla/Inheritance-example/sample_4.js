function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name;};


function TwoDShape(){}
// take care of inheritance
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';


function Triangle(side, height) {
	this.side = side;
	this.height = height;
}
// take care of inheritance
Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side * this.height / 2;};

var my = new Triangle(5, 10);
my.getArea(); //25

my.hasOwnProperty('side'); // true
my.hasOwnProperty('name'); //false

my instanceof Shape //true