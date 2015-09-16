var MYAPP = {};
   MYAPP.dom = {};
   MYAPP.dom.Text = function() {
     this.insert = function(where) {
       var txt = document.createTextNode(this.url);
       where.appendChild(txt);
}; };
   MYAPP.dom.Link = function() {
     this.insert = function(where) {
       var link = document.createElement('a');
       link.href = this.url;
       link.appendChild(document.createTextNode(this.url));
       where.appendChild(link);
}; };
   MYAPP.dom.Image = function() {
     this.insert = function(where) {
       var im = document.createElement('img');
       im.src = this.url;
       where.appendChild(im);
}; };


MYAPP.dom.factory = function(type) {
     return new MYAPP.dom[type];
}


var o = MYAPP.dom.factory(type);
   o.url = 'http://...'
   o.insert();