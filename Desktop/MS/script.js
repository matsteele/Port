$(document).ready(function(){

	var num = ['1', '2', '3', '4', '5']

	$('.skill-name').each(function(i, value) {
		$(this).hover(function (e) {
			$("#portDiv").css("background", "rgba(0, 0, 0, 0.6)");
			$('#text' + num[i]).css("display", "inline");
			// $('#name' + num[i]).css("font-size", "30px");
			// $('#name' + num[i]).css("background", "rgba(119, 187, 255, 0.9)");
			// $(".skill-name a h3").css("background", "rgba(119, 187, 255, 0.5)")
			$(".main-column").css("opacity", "0.5");
		}, function () {
			$("#portDiv").css("background", "transparent");
			$('#text' + num[i]).css("display", "none");
			// $('#name' + num[i]).css("font-size", "24px");
			// $('#name' + num[i]).css("background", "rgba(119, 187, 255, 0.5)");
			// $(".skill-name a h3").css("background", "rgba(119, 187, 255, 0.9)")
			$(".main-column").css("opacity", "1");
		})
	});

	$('.main-image').hover(function() {
		$('.about-content').css("display", "inline");
	}, function () {
		$('.about-content').css("display", "none");
	})

});