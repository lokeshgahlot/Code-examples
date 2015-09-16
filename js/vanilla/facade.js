//https://carldanley.com/js-facade-pattern/


function addEvent( element, event, callback ) {
  
  if( window.addEventListener ) {
    element.addEventListener( event, callback, false );
  } else if( document.attachEvent ) {
    element.attachEvent( 'on' + event, callback );
  } else {
    element[ 'on' + event ] = callback;
  }
  
}