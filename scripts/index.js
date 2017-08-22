$('.icon-control').click(function(){
	$('.icon-control').removeClass('active');
	$(this).toggleClass('active');
  var selector = '#' + $(this).data('target');
  $('.paragraph').hide();
  $(selector).toggle();
});

$('#first-icon').click();