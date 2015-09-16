//singleton

//global veriable 
function Logger() {
    if (typeof global_log === "undefined") {
        global_log = this;
    }
    return global_log;
}


ar a = new Logger();
var b = new Logger();
alert(a === b); // true


//Property of the Constructor

function Logger() {
    if (typeof Logger.single_instance === "undefined") {
        Logger.single_instance = this;
    }
    return Logger.single_instance;
}

//--------------------------------------------------------------------
//Sample 3
function Universe() {
    // the cached instance
    var instance = this;
    // proceed as normal
    this.start_time = 0;
    this.bang = "Big";
    // rewrite the constructor
    Universe = function() {
        return instance;
    };
}
// testing
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true


//--------------------------------------------------------------------
//Sample 4

function Universe() {
    // do we have an existing instance?
    if (typeof Universe.instance === "object") {
        return Universe.instance;
    }
    // proceed as normal
    this.start_time = 0;
    this.bang = "Big";
    // cache
    Universe.instance = this;
    // implicit return:
    // return this;
}
// testing
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true