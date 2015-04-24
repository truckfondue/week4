// $(function() {




// 
var newClass = '';


//render #land via the addClass paramater
$('.btn').on('click', function(){
	$(this).addClass(newClass); //wait 1000ms the
		$(this).closest('li').prev().find('a').attr('class', 'btn btn-warning');
		$(this).closest('li').prev().prev().prev().prev().prev().prev().prev().prev().prev().find('a').attr('class', 'btn btn-warning');
		$(this).closest('li').next().find('a').attr('class', 'btn btn-warning');
		$(this).closest('li').next().next().next().next().next().next().next().next().next().find('a').attr('class', 'btn btn-warning');
		// $(this).closest('li').next().child().removeClass().addClass('btn btn-warning');
		console.log($(this).closest('li:eq()'));
		// $(this).closest('li:eq(-9)').find('a').attr('class', 'btn btn-warning');


	newClass = '';
});

//sets newClass to deploy campfire upon clicking #land
$('#campfire').on('click', function(e){
	e.preventDefault();
	newClass = $(this).children().attr('class');
	console.log(newClass);
});

//sets newClass to deploy lake upon clicking #land
$('#lake').on('click', function(e){
	e.preventDefault();
	newClass = $(this).children().attr('class');
	console.log(newClass);
});


