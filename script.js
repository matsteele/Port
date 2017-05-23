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
	$('.main-image, .showInfo, .eIcons').hover(function() {
		$('.showInfo').css("display", "flex");
		$('.eIcons').css("margin", "0 0");
		$('.main-summary').show();
	}, function () {
		$('.showInfo').slideUp(2000).mouseover(function () {
			$(this).stop();
		});
		$('.eIcons').css("margin", "0 auto");
		$('.main-summary').slideUp(3000).mouseover(function () {
			$(this).stop();
		});
	});

	// Show only main-summary
	// $('.main-image, .showInfo, .eIcons').hover(function() {
	// 	$('.main-summary').show();
	// }, function () {
	// 	$('.main-summary').slideUp(3000).mouseover(function () {
	// 		$(this).stop();
	// 	});

	// 	// Find a way to return to the beginning of main-summary when hovering back to proPic
	// 	// $('.icon-name').removeClass('active');
	// 	// $('.name, .bio').show();
	// 	// $('.icoText' + numb[i]).hide();
		
	// });

	var numb = ['1', '2', '3', '4', '5','6', '7'];


	// Show different icon summaries
	$('.icon-name').each(function(i, value) {
		$(this).click(function (e) {

			// Toggle click background
			$(this).toggleClass('active').siblings().removeClass('active');


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

	// Show award text & picture
	$('.awards li .award-name').click(function () {

		var x = $(this).attr('data');
		$('.award-name').toggleClass('active').siblings().removeClass('active');


		// Txt
		var aTxt = $('p[data="' + x + '"]')[0];
		$(aTxt).toggle();
		$(aTxt).appendTo('.about-content');
		var mTxt = $('.about-content p').not(aTxt);
		$(mTxt).hide();

		// Title
		var aTit = $('h3[data="' + x + '"]')[0];
		$(aTit).toggle();
		$(aTit).appendTo('.sideTitle');
		var mTit = $('.sideTitle h3').not(aTit);
		$(mTit).hide();

		// Pic
		var aPic = $('img[data="' + x + '"]')[0];
		$(aPic).toggle();
		$(aPic).appendTo('.main-image');
		var mPic = $('.main-image img').not(aPic);
		$(mPic).hide();

		var bioTxt = $('.bio');
		var bioPic = $('.proPic');
		if ( $(aTxt).is(':visible') && $(aPic).is(':visible') ) {
			// $(aPic).show();
			$(bioTxt).hide();
			$(bioPic).hide();
		} else {

			//Figure out a way to show default sideTitlte, pic, and mtxt when clicking again
			// $('.proPic').show();
			// var bioTxt = $('.bio');
			// var bioPic = $('.proPic');
			$(bioTxt).show();
			$(bioPic).show();
		}
	})



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