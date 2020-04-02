$(document).ready(function() {
			$(".xuong,.kn").click(function(){
				$('body,html').animate({scrollTop:$('#khoiedu').offset().top}, 800);
				return	false;

			})
			$(".cmt").click(function(){
				$('body,html').animate({scrollTop:$('#khoicomment').offset().top}, 800);
				return	false;
			})
		});
