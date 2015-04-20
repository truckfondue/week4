
// 
// 
var Quote = function(text, author){
	text = text || "twiddle-de and twiddle-dum";
	author = author || "your mom";
	this.text = text;
	this.author = author;
};

var theGoodParts = new Quote('only use the good parts', 'my mom');
var empty = new Quote();
console.log(theGoodParts);
console.log(empty);

Quote.prototype.what = function(){
	console.log(this.author + ' says WHAT!');
};

Quote.prototype.countWords = function(){
	return this.text.split(' ').length;
};

Quote.prototype.newDOM = function(){
	this.el = $('p').text(this.text);
	return this.el;
};

Quote.prototype.changeColor = function(color){
	this.el.css('color', color);
	console.log('test');
};

Quote.prototype.changeText = function(text){
	this.text = text;
	this.el = $('p').text(this.text);
	return this.el;

};

theGoodParts.what();
empty.what();

console.log('Word Count: ' + theGoodParts.countWords());



$(document).on('ready', function() {
  theGoodParts.newDOM();
});

var Media = function(name, method){
	this.name = name;
	this.method = method;
	console.log('I\m watching ' + this.name + ' on ' + this.method);
};

var myMedia = new Media('Fox', 'Hulu');


var Picture = function(img, name, method){
	Media.call(this, name, method);
	this.img = img;
	console.log(this);
};

Picture.prototype  = new Media();
Picture.prototype.constructor = Picture;

Picture.prototype.view = function(view) {
	// bodythis.text = text;
	this.el = $('p').text(myMedia);
	return this.el;
};





