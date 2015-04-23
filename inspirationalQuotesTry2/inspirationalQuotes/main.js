// $(document).on('ready', function() {
  
// })
// 


var Quote = function(text, author, rating){
  // Shorthand default parameters.
  // This is a nice side-effect of the ||
  // operator.
  //console.log(rating);
  text = text || 'no quote text';
  author = author || 'anonymous';
  rating = rating || 'unrated';

  this.text = text;
  this.author = author;
  this.rating = rating;
};





Quote.prototype.render = function(){
	console.log('render');
  		if(!this.el){
  			this.el = $('#quoteTemplate')
  			.clone()
  			.attr('id', null)
  			.addClass('quoteRender');
  			var originalQuote = this;
  			this.el.find('.delete-button').on('click', function(){
  				console.log('delete-button test');
  				// var deleteRender = $(this).closest('div').find('.quote').text();
  				// console.log(originalQuote);
  				for (var i = 0; i < quoteArray.length; i++) {
  					if (originalQuote === quoteArray[i]) {
  						quoteArray.splice(i, 1);
  						console.log('test splice');
  					}
  					
  				}

  				$(this).closest('div').remove();
  				$('#document').text(iterator -= 1);

			});
			this.el.find('.edit-button').on('click', function(){
  				console.log('edit-button test');
  				console.log(originalQuote.text);
  				console.log(originalQuote.author);

  				$(".quote-text").val(originalQuote.text);
				$(".author-text").val(originalQuote.author);

				//lines 58 - 69 are duplicates of 
				// var deleteRender = $(this).closest('div').find('.quote').text();
  		// 		console.log(originalQuote);
  				for (var i = 0; i < quoteArray.length; i++) {
  					if (originalQuote === quoteArray[i]) {
  						quoteArray.splice(i, 1);
  						console.log('test splice');
  					}
  					
  				}

  				$(this).closest('div').remove();
  				$('#document').text(iterator -= 1);
  				

			});
			this.el.find('.rate-button').on('click',  function(){
  				console.log('rate-button test');
  				originalQuote.el.find('.user-rating').toggleClass('hidden');
  				
  				

  				



			});
			originalQuote.el.find('.rating-submit-button').on('click', function(){
  					console.log("rating test");
  					var userRating = parseInt(originalQuote.el.find(".rating-text").val());
  					console.log(userRating);
  					originalQuote.el.find('.rating').text(userRating);
  					originalQuote.rating = userRating;
  					originalQuote.el.find('.user-rating').toggleClass('hidden');
  					
  				});
  			
  }
    
  	this.el.find('.quote').text(this.text);
	this.el.find('.author').text(this.author);
	//this value will be dymaically set by the user
	//default setting is unrated
	this.el.find('.rating').text(this.rating);
	// console.log(this.el[0]);

	return this.el;
};

var quoteArray = [];

//deletion render
//
//
//var deletionRender = _.findIndex(quoteArray, 3)
quoteArray.forEach(function(q){
		$('#quoteContainer').append( q.render());
	});




$('#submit-button').on('click', function(){
	console.log('test in the submit');
	
	var quoteText = $(".quote-text").val();
	var quoteAuthor = $(".author-text").val();
	var quoteRating = $(".rating-text").val();
	var tempQuote = new Quote(quoteText, quoteAuthor, quoteRating);

	quoteArray.push(tempQuote);

	console.log('test');
	$('#quoteContainer').append( tempQuote.render() );
	iterator = parseInt($('#document').text());
	

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
		$('#quoteContainer').append( q.render());
	});
	
});




var ghandi = new Quote('An eye for an eye makes the whole world bline', 'Ghandi', 5);


