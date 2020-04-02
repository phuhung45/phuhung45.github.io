$(document).ready(function() {
			$(".xuong,.kn").click(function(){
				$('body,html').animate({scrollTop:$('#khoiedu').offset().top}, 800);
				return	false;

			})
			$("#lh").click(function(){
				$('body,html').animate({scrollTop:$('.khoilh').offset().top}, 800);
				return	false;

			})
			$(".cmt").click(function(){
				$('body,html').animate({scrollTop:$('.khoicmt').offset().top}, 800);
				return	false;
			})
});
