$(function(){

	 $(".xuong,.kn").click(function() {
		$('body,html').animate({scrollTop:$('#khoiedu').offset().top},800)
		return false;

	 })
	$(".sp").click(function() {
		$('body,html').animate({scrollTop('#khoisp').offset().top}, 800)
	return false;
	})
})
