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
	$('.main-image, .showInfo, .edu, .exp').hover(function() {
		$('.showInfo').css("display", "flex");
		$('.edu, .exp').css("margin", "0 0");
	}, function () {
		$('.showInfo').css("display", "none");
		$('.edu, .exp').css("margin", "0 auto");
	});

	// Show only main-summary
	$('.main-image, .showInfo, .edu, .exp').hover(function() {
		$('.main-summary').show();
	}, function () {
		$('.main-summary').hide();
	});

	var numb = ['1', '2', '3', '4', '5','6', '7'];


	// Show different icon summaries
	$('.icon-name').each(function(i, value) {
		$(this).click(function (e) {
			e.preventDefault();

			var icoText = $('.icoText' + numb[i]);
			var icoName = $('.icoName' + numb[i]);
			var awards = $('.awards' + numb[i]);

			$(".about-content p").not(icoText).hide();
			$(".sideTitle h3").not(icoName).hide();
			$(".awards ul").not(awards).hide();

			icoText.toggle();
			icoName.toggle();
			awards.toggle();

			// Show main-summary when clicking icon again
			if ( icoText.is(':visible') ) {
				$('.name, .bio').hide();
			} else {
				$('.name, .bio').show();
			}

		})
	});

	var txt = ['1', '2', '3', '4', '5', '6', '7'];
	var awd = ['a', 'b'];

	$('.awards ul li a').each(function (i, value) {
		$(this).click(function (e) {
			// e.preventDefault();


			var aTxt = $('.icoText7a');
			// var aTxt = $('.icoText' + txt[i] + awd[i]);
			// console.log(aTxt);

			var mTxt = $('.icoText7');
			// var mTxt = $('.icoText' + txt[i]);

			var aPic = $('.icoPic7a')
			// var aPic = $('.icoPic' + txt[i] + awd[i]);
			var mPic = $('.proPic');


			aTxt.appendTo('.about-content');
			aTxt.toggle();
			mTxt.hide();

			
			aPic.toggle();
			aPic.appendTo('.main-image');
			mPic.hide();

			if ( aTxt.is(':visible') ) {
				// $('.icoText7').hide();
			} else {
				mTxt.show();
			}

			if ( aPic.is(':visible') ) {
				aPic.show();
			} else {
				mPic.show();
			}
		})
		// $(this).click(function (e) {
			
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