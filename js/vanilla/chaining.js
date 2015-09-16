
//chaining pattern
//http://schier.co/post/method-chaining-in-javascript



// define the class
var Kitten = function() {
  this.name = 'Garfield';
  this.color = 'brown';
  this.gender = 'male';
};

Kitten.prototype.setName = function(name) {
  this.name = name;
  return this;
};

Kitten.prototype.setColor = function(color) {
  this.color = color;
  return this;
};

Kitten.prototype.setGender = function(gender) {
  this.gender = gender;
  return this;
};

Kitten.prototype.save = function() {
  console.log(
    'saving ' + this.name + ', the ' +
    this.color + ' ' + this.gender + ' kitten...'
  );

  // save to database here...

  return this;
};