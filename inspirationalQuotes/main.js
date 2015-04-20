// $(document).on('ready', function() {
  
// });
// 
// You have some Javascript data (primitive value, array, object, etc)
var numDocs = 0;



// Use jQuery to create a new DOM element.
// var messageEl = $("<p>You have " +  + " documents.</p>");

// Add the DOM element to the page.
//$('#quotes').append(messageEl);


var Quote = function(text, author){
  // Shorthand default parameters.
  // This is a nice side-effect of the ||
  // operator.
  text = text || 'no quote text';
  author = author || 'anonymous';

  // Longer, but means more control:
  // if(text === undefined){
  //   text = 'no quote text';
  // }
  // if(author === undefined){
  //   author = 'anonymous';
  // }

  // Now set up the instance here
  this.text = text;
  this.author = author;
};

// Instance of a quote:
var myQuote = new Quote('You miss 100% of the shots you don\'t take - Wayne Gretzky', '- Michael Scott');
console.log(myQuote.text, myQuote.author);

// What if I don't pass any arguments to the constructor?
var emptyQuote = new Quote('This is a good quote');
console.log(emptyQuote);



Quote.prototype.create = function(){
  this.el = $('<div>')
    .text(this.text + ' - ' + this.author);
  return this.el;
};

$('#quotes').append( myQuote.create() );

var testQuote = new Quote('test quote', 'dr. seuss');
$('#quotes').append(testQuote.create());

$('#submit-button').on('click', function(){
	var quoteText = $(".quote-text").val();
	var quoteAuthor = $(".author-text").val();
	var tempQuote = new Quote(quoteText, quoteAuthor);
	numDocs = $('numDocs' +1);

	console.log('test');
	$('#quotes').append( tempQuote.create() );
	var iterator = parseInt($('#document').text());
	console.log(iterator);
	$('#document').text(iterator + 1);

});


