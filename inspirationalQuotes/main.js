// $(document).on('ready', function() {
  
// })
// 
var quoteArray = [];

var Quote = function(text, author, rating){
  // Shorthand default parameters.
  // This is a nice side-effect of the ||
  // operator.
  console.log(rating);
  text = text || 'no quote text';
  author = author || 'anonymous';
  rating = rating || 'unrated';

  this.text = text;
  this.author = author;
  this.rating = rating;
};


Quote.prototype.create = function(){
	console.log('create');
  		if(!this.el){
  			this.el = $('#quoteTemplate')
  			.clone()
  			.attr('id', null)
  			.addClass('quoteRender');
  			
  }
    
  	this.el.find('.quote').text(this.text);
	this.el.find('.author').text(this.author);
	this.el.find('.rating').text(this.rating);
	console.log(this.el[0]);

	return this.el;
};


$('#submit-button').on('click', function(){
	console.log('test in the submit');
	
	var quoteText = $(".quote-text").val();
	var quoteAuthor = $(".author-text").val();
	var quoteRating = $(".rating-text").val();
	var tempQuote = new Quote(quoteText, quoteAuthor, quoteRating);

	quoteArray.push(tempQuote);

	console.log('test');
	$('#quoteContainer').append( tempQuote.create() );
	var iterator = parseInt($('#document').text());
	

	$('#document').text(iterator += 1);
	$(".quote-text").val('');
	$(".author-text").val('');
	$('.rating-text').val('');
	console.log(iterator);
});

$('#sort-by-rating').on('click', function(){
	console.log('Sort by rating test');
	quoteArray.sort(function(a,b){
		return b.rating - a.rating;
	});
	console.log(quoteArray);
	quoteArray.forEach(function(q){
		$('#quoteContainer').append( q.create());
	});
	
});





