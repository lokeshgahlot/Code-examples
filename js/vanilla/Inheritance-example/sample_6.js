function   declareClass (subClass, superClass) {
    /// <summary>
    /// Create a link between two classes so that one class (subClass) will inherit from the other (superClass).
    /// The link is saved at the subClass.
    /// </summary>
    /// <param name="subClass">The class that want to inherit.</param> 
    /// <param name="superClass">The class that should be inherit.</param>

    // creating the constructor object that replace that was lost in in the class defenition.
    subClass.prototype.constructor = subClass;

    if (superClass) {
        //if there is a superClass, then create a link between the subClass and the superClass
        subClass.__superClass = superClass;
        subClass.__basePrototypePending = true;

        //update the prototype object of a class according to the inheritance chain.
        resolveInheritance(subClass);
    }
    return subClass;
}


function resolveInheritance (subClass) {
    /// <summary>
    ///  The function does two things: 
    ///  1. It copies members from the superClass's prototype into the subClass's prototype,
    ///     if the subClass doesn't have the same member in its prototype,  i.e., it doesn't override the method. 
    ///  2. It recurses up the inheritance chain to do the same for the superClass.  
    ///  Note that this logic runs only once per class, 
    ///  because it is based on true value for __basePrototypePending property.</summary>
    /// <param name="subClass">The subClass that we want to to check if there are members that need to be adden from its superClass.</param> 

    if (subClass.__basePrototypePending) {
        //if there is a superClass to this subClass

        var superClass = subClass.__superClass;

        //call to the same function again with the superClass to make sure that the superClass's prototype contain all the functions 
        //(his and its ancestors).
        resolveInheritance(superClass);

        var superPrototype = superClass.prototype;
        var subPrototype = subClass.prototype;

        //go over all the function in the superClass prototype and check if the subClass has them.
        // if the subClass has this function then it stays (the subClass is overriding the superClass's function).
        // if the subClass doesn't have this function, the we add it to its prototype.
        for (var method in superPrototype) {
            subPrototype[method] = subPrototype[method] || superPrototype[method];
        }

        //we delete this flag so we won't check this class again
        delete subClass.__basePrototypePending;
    }
}


function SubClass(){

}

SubClass.prototype.name = "subClass";
SubClass.prototype.sayHi = function(){
    console.log("SubClass, Say Hi method");
}

SubClass.prototype.sample1 = function(){
    console.log("SubClass, Sample1");
}



function SuperClass(){

}

SuperClass.prototype.name = "superClass";
SuperClass.prototype.sayHi = function(){
    console.log("SuperClass, Say Hi method");
}

SuperClass.prototype.sample2 = function(){
    console.log("SubClass, Sample2");
}



declareClass(SubClass, SuperClass);
var s = new SubClass();








