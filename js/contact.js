$(function() {
	var form = $('#contactform');
	var formMessages = $('#callback, #message');

	$(form).submit(function(event){
	event.preventDefault()
	});

	var formData = $(form).serialize();

	$.ajax({
		type: 'POST',
		url: $(form).attr('action'),
		data: formData
	}).done(function(response) {
		$(formMessages).removeclass('error');
		$(formMessages).addClass('success');

		$(formMessages).text(response);

		$('#name, #callback, #message').val('');
	}).fail(function(data){
		$(formMessages).removeClass('success');
		$(formMessages).addClass('error');

		if (data.responseText !== '') {
			$(formMessages).text(data.responseText);
		} else {
			$(formMessages).text('Sorry about that; an error occured and your message could not be sent. Please try again!')
		}
	}

})
