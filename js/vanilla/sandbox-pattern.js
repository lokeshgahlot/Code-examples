http://stackoverflow.com/questions/11187582/javascript-sandbox-pattern-example-implementation
Sandbox.modules = {};

Sandbox.modules.returnNumbers = function(MYAPP) {
    MYAPP.return100 = function() {return 100;};
};

Sandbox.modules.returnLetters = function(MYAPP) {
    MYAPP.returnABC = function() {return "ABC";};
};


function Sandbox() {

    /* Because Sandbox is a constructor, an new object is automatically 
    created.  Because we're in the constructor, we refer to this new object 
    as 'this'. 

    A constructor would typically be used as part of an assignment, e.g. 
    myObject = new Sandbox().  

    However, it's also legitimate javascript to use a constructor without 
    the assignment by just writing new Sandbox() with no assignment.  The 
    constructor does return an object, it's just that it doesn't get 
    assigned to anything so  is discarded.

    We're going to add functionality (methods) to the 'this' object, but 
    rather than returning it, we will pass it to the callback function, so 
    the methods can be used immediately.
    */

    var args = Array.prototype.slice.call(arguments);  //Put the arguments 
    //of the call to the Sandbox constructor in an array called args.

    var callback = args.pop(); //The last argument is the callback
    var requiredmodules = args;  //The remaining arguments are the require
    // modules

    //For each of the modules in 'requiredmodules', add the module's 
    //methods to 'this'
    for (i=0; i< requiredmodules.length; i++) {
        Sandbox.modules[requiredmodules[i]](this);
    }


    //'this' now has methods returnNumbers and returnLetters

    //Call the callback.  In the example below, 'this' will be called 
    //MYAPP, which within the callback will have all the methods from 
    //the required modules.

    callback(this);
}



//Finally here is an example of usage

new Sandbox('returnNumbers', 'returnLetters', function (MYAPP) {
    console.log(MYAPP.return100());
    console.log(MYAPP.returnABC());
});