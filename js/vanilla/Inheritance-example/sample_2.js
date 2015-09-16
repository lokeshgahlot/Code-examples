function BaseClass()
{
    var self = this;

    self.sayHello = function()
    {
        console.log("hello from baseclass");
    }

    return self;
}


function SubClass()
{
    var self = new BaseClass();

    self.sayHello = function()
    {
        console.log("hello from subclass");
    }
    return self;
}

var base = new BaseClass();
var sub  = new SubClass();