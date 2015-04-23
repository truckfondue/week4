// $(document).on('ready', function() {
  
// })
// 

var Library = function(name){
  this.name = name;
  this.quoteArray = [];
  this.render();
};
 
Library.prototype.addQuote = function(quote){
  this.quoteArray.push(quote);
  this.render();
};

Library.prototype.render = function () {

  if(this.el === undefined){

    // If it hasn't been rendered yet, let's do
    // that now by cloning the template and
    // removing the id.
    this.el = $('#library-tpl')
      .clone()
      .attr('id', null);

    
    this.el.find('.new-quote-form').on('submit', this.onFormSubmit.bind(this));
  }

  /*
    A lot just happened inside the if statement there, but
    fear not! It only executes once per instance. You can call
    render hundreds of times, but the content of the 'if' will
    only fire the first time.
    Now that we have our dom element created and event listeners
    attached, we can do the minor task of updating contents.
  */
  this.el.find('.library-name').text(this.name);

 
  var quoteElements = this.quoteArray.map(function(quote){
    // All we need from the movie is what's returned from
    // the render method (which is a dom element, btw)
    return quote.render();
  });

  // Great! Got an array of DOM elements, let's just
  // append them to our movie-list
  this.el.find('.quote-list').append(quoteElements);

  // Utility again, return a reference to the
  // dom element.
  return this.el;
};


Library.prototype.onFormSubmit = function (e) {
  e.preventDefault();
  var quoteText = $(e.currentTarget).find('[name="quote"]').val();
  var quoteAuthor = $(e.currentTarget).find('[name="author"]').val();
  var quoteRating = $(e.currentTarget).find('[name="rating]').val();
  // Ok, we've got the values, let's hook it up, bro.
  var tempQuote = new Quote(quoteText, quoteAuthor, quoteRating);

  // Movie, created. Let's add it to this library's list!
  // Added benefit is that this method also automatically
  // calls render() on the library, so the DOM is updated too.
  this.addQuote(tempQuote);


};

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


Quote.prototype.render = function(){
  console.log('render');
      if(!this.el){
        this.el = $('#quoteTemplate')
        .clone()
        .attr('id', null);
        // .addClass('quoteRender');
        
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

  //Must link .addQuote prototype
  //quoteArray.push(tempQuote);

  console.log('test');
  $('#quoteContainer').append( tempQuote.render() );
  var iterator = parseInt($('#document').text());
  

  $('#document').text(iterator += 1);
  $(".quote-text").val('');
  $(".author-text").val('');
  $('.rating-text').val('');
  console.log(iterator);
});

$('#sort-by-rating').on('click', function(){
  console.log('Sort by rating test');
  Library.quoteArray.sort(function(a,b){
    return b.rating - a.rating;
  });
  console.log(quoteArray);
  Library.quoteArray.forEach(function(q){
    $('#quoteContainer').append( q.render());
  });
  
});

var myLibrary = new Library('Inspirational Quotes');







