var myobj = (function() {
    // private members
    var name = "my, oh my";
    // implement the public part
    return {
        getName: function() {
            return name;
        }
    };
}());
myobj.getName(); // "my, oh my"