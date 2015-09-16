//Private Functions as Public Methods

var MYAPP = {};
   MYAPP.dom = (function(){
     var _setStyle = function(el, prop, value) {
     	console.log('setStyle');
  		}; // _setStyle
  	var _getStyle = function(el, prop) {
      console.log('getStyle');
	}; // _getStyle
return {
    setStyle: _setStyle,
    getStyle: _getStyle,
    yetAnother: _setStyle
}; //return

})()