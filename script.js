$(document).ready(function(){


	// Show sample preview
	var num = ['1', '2', '3', '4', '5']

	$('.sample-name').each(function(i, value) {
		$(this).hover(function (e) {
			$("#portDiv").css("background", "rgba(0, 0, 0, 0.6)");
			$('#text' + num[i]).css("display", "inline");
			$('#button' + num[i]).attr("src", "svgs/on-buttons/button" + num[i] +".svg");
			$(".main-column").css("opacity", "0.5");
		}, function () {
			$("#portDiv").css("background", "transparent");
			$('#text' + num[i]).css("display", "none");
			$('#button' + num[i]).attr("src", "svgs/off-buttons/button" + num[i] +".svg");
			$(".main-column").css("opacity", "1");
		})
	});

	// Show default summary
	$('.main-image, .about-content, .list-inline').hover(function() {
		$('.about-content').css("display", "inline");
		$('.edu, .exp').css("margin", "0 0");
	}, function () {
		$('.about-content').css("display", "none");
		$('.edu, .exp').css("margin", "0 auto");
	});

	// Show only main-summary
	$('.main-image, .about-content').hover(function() {
		$('.main-summary').css("display", "inline");
	}, function () {
		$('.main-summary').css("display", "none");
	});

	var numb = ['1', '2', '3', '4', '5','6']

	// Show different icon summaries
	$('.icon-name').each(function(i, value) {
		$(this).hover(function (e) {
			$('.icoText' + numb[i]).css("display", "inline");
			$('.main-summary').css("display", "none");
		}, function () {
			$('.icoText' + numb[i]).css("display", "none");
			$('.main-summary').css("display", "inline");
		})
	});

	// Show iframe
	$('.showIframe').click("slow", function() {
		$('.siteSample').toggle("slow", function() {});
		$('.modal-body').toggle("slow", function() {});
		$('.modal-content').toggleClass("modal-content2");
		$(this).text(function(i, text){
          return text === "DISPLAY SAMPLE" ? "DISPLAY DESCRIPTION" : "DISPLAY SAMPLE";
      })
	});

});