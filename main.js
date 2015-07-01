$(document).on('ready', function(){
	
	var clickToEdit = function(){
		var edit = $('.new-info');
		edit.toggleClass('active');
		if(edit.hasClass('active')){
			$('.toggleButton').text('Hide Form');
		} else {
			$('.toggleButton').text('Show Form');
		}
	};


	$('.toggleButton').on('click', function(){
		clickToEdit();
	});

	$('.user-input').on('submit', function(event) {
		event.preventDefault();

		$('.user-name').text($('#name').val());
		$('.user-bio').text($('#bio').val());
		$('.user-books').text($('#books').val());
		$('.user-libraries').text($('#libraries').val());

		clickToEdit();
	});

});