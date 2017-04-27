$(document).ready(function(){

	var num = ['1', '2', '3', '4', '5']

	$('.skill-name').each(function(i, value) {
		$(this).hover(function (e) {
			$("#portDiv").css("background", "rgba(0, 0, 0, 0.6)");
			$('#text' + num[i]).css("display", "inline");
			// $('#portDiv').fadeIn(1000);
			$('#button' + num[i]).attr("src", "svgs/on-buttons/button" + num[i] +".svg");
			// $('#button' + num[i]).animate({height: '180px', opacity: '1'}, "slow");
			// $('#name' + num[i]).css("background", "rgba(119, 187, 255, 0.9)");
			// $(".skill-name a h3").css("background", "rgba(119, 187, 255, 0.5)")
			$(".main-column").css("opacity", "0.5");
		}, function () {
			$("#portDiv").css("background", "transparent");
			$('#text' + num[i]).css("display", "none");
			$('#button' + num[i]).attr("src", "svgs/off-buttons/button" + num[i] +".svg");
			// $('#button' + num[i]).animate({height: '160px', opacity: '0.9'}, "slow");
			// $('#name' + num[i]).css("font-size", "24px");
			// $('#name' + num[i]).css("background", "rgba(119, 187, 255, 0.5)");
			// $(".skill-name a h3").css("background", "rgba(119, 187, 255, 0.9)")
			$(".main-column").css("opacity", "1");
		})
	});

	$('.main-image, .about-content, .list-inline').hover(function() {
		$('.about-content').css("display", "inline");
		// $('.about-content').fadeIn(1000);
		// $('.about-content').animate({opacity: '0.9'}, 1000);
	}, function () {
		// $('.about-content').fadeOut(1000);
		$('.about-content').css("display", "none");
		// $('.about-content').animate({opacity: '0.2'}, "slow");
	})


});