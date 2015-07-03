$(document).on('ready', function(){
	
	var clickToEdit = function(){
		var edit = $('.new-info');
		edit.toggleClass('active');
		if(edit.hasClass('active')){
			$('.toggle-button').text('Hide Form');
				$('.new-info').removeClass
		} else {
			$('.toggleButton').text('Show Form');
		}
	};


	$('.toggleButton').on('click', clickToEdit);

	$('.user-info').on('submit', function(event) {
		event.preventDefault();

		$('.user-name').text($('#name').val());
		$('.user-bio').text($('#bio').val());
		$('.user-books').text($('#books').val());
		$('.user-libraries').text($('#libraries').val());

		clickToEdit();
	});

});
