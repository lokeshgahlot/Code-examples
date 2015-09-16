//Lazy Function Definition

//http://michaux.ca/articles/lazy-function-definition-pattern


// sample 1
var foo = function() {
    var t = new Date();
    foo = function() {
        return t;
    };
    return foo();
};


// sample 2

var getScrollY = function() {

    if (typeof window.pageYOffset == 'number') {

        getScrollY = function() {
            return window.pageYOffset;
        };

    } else if ((typeof document.compatMode == 'string') &&
               (document.compatMode.indexOf('CSS') >= 0) &&
               (document.documentElement) &&
               (typeof document.documentElement.scrollTop == 'number')) {

        getScrollY = function() {
            return document.documentElement.scrollTop;
        };

    } else if ((document.body) &&
               (typeof document.body.scrollTop == 'number')) {

      getScrollY = function() {
          return document.body.scrollTop;
      }

    } else {

      getScrollY = function() {
          return NaN;
      };

    }

    return getScrollY();
}

// sample 3

var MYAPP = {};
   MYAPP.myevent = {
     addListener: function(el, type, fn){
       if (typeof el.addEventListener === 'function') {
         MYAPP.myevent.addListener = function(el, type, fn) {
             el.addEventListener(type, fn, false);
         };
       } else if (typeof el.attachEvent === 'function'){
         MYAPP.myevent.addListener = function(el, type, fn) {
             el.attachEvent('on' + type, fn);
};
} else {
         MYAPP.myevent.addListener = function(el, type, fn) {
             el['on' + type] = fn;
}; }
       MYAPP.myevent.addListener(el, type, fn);
     }
};
