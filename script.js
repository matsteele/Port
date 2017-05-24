$(document).ready(function(){


	// Show sample preview
	var num = ['1', '2', '3', '4', '5', '6', "bg"]

	$('.sample-name').each(function(i, value) {
		$(this).hover(
			function (e) { 
				$(this).fadeIn("fast", function() {
					$("#portDiv").css("background", "rgba(0, 0, 0, 0.6)");
					$('#text' + num[i]).css("display", "inline");
					$('#button' + num[i]).attr("src", "svgs/on-buttons/button" + num[i] +".svg");
					$(".main-column").css("opacity", "0.5");
				});
				
			}, 
			function () {
				$(this).fadeIn("fast", function() {
					$("#portDiv").css("background", "transparent");
					$('#text' + num[i]).css("display", "none");
					$('#button' + num[i]).attr("src", "svgs/off-buttons/button" + num[i] +".svg");
					$(".main-column").css("opacity", "1");
				});
				
			}
		);
	});

	// Show default summary
	$('.main-image, .mantainHover, .showInfo, .edu, .exp').hover(function() {
		$('.sample-name').css("opacity", "0.5");
		$('.showInfo, .mantainHover').css("display", "flex");
		$('.showInfo').css("visibility", "visible");
		$('.showInfo').css("opacity", "1");
		$('.edu, .exp').css("margin", "0 0");	
	}, function () {
		$('.sample-name').css("opacity", "1");
		$('.showInfo').css("opacity", "1");
		$('.showInfo').css("display", "none")
		$('.mantainHover').css("display", "none")
		$('.showInfo').css("-webkit-transition", "opacity 600ms, visibility 600ms");
		//these transitions do nothing 
		$('.showInfo').css("animation", "fade 10s");
		$('.showInfo').css("visibility", "hidden");
		$('.edu, .exp').css("margin", "0 auto");
	});



	var numb = ['1', '2', '3', '4', '5','6', '7'];


	// Show different icon summaries
	$('.icon-name').each(function(i, value) {
		$(this).click(function (e) {

			// Toggle click background
			$(this).toggleClass('active').siblings().removeClass('active');


			var iconInfo = $(this).attr('id');
		

			var iconHeader = resumePoints[iconInfo][0]["sideHeader"]
			var iconText = resumePoints[iconInfo][0]["text"]
			var iconImg = resumePoints[iconInfo][0]["imgSrc"]
			var iconAwards = resumePoints[iconInfo][0]["pointSrc"]


			$('.about-content').text(iconText)
			$('.proPic').attr("src", iconImg)
			$(".sideTitle h3").text(iconHeader)

			if (iconAwards) {
				for (i = 1; i < iconAwards; i++){

					var pointIconSrc =	resumePoints[iconInfo][i]["pointSrc"] 

					$(".point" + i).attr("src", pointIconSrc); 


				}
			};

			



			//----show sidebars----
			$(".about-content p").show();
			$(".sideTitle sideHeaderTxt").css("display", "block");
			$(".sideTitle h3").css("display", "flex");
			$(".sideTitle").css("display", "flex");
			$(".awards ul").show();

			// $(".about-content p").not(iconHeader).hide();
			// $(".sideTitle h3").not(iconHeader).hide();
			// $(".awards ul").not(iconHeader).hide();

			
			//----hide sidebars----
			// $(".about-content p").not(icoText).hide();
			// $(".sideTitle h3").not(icoName).hide();
			// $(".awards ul").not(awards).hide();

			// icoText.toggle();
			// icoImg.toggle(); // inputted to adapt images, have yet to
			// icoName.toggle();
			// awards.toggle();

			// Show main-summary when clicking icon again
			// if ( icoText.is(':visible') ) {
			// 	$('.name, .bio').hide();
			// } else {
			// 	$('.name, .bio').show();
			// }
			
		})
	});

	// Show award text & picture
	$('.awards li .award-name main-image').click(function () {

		var x = $(this).attr('data');
		
		$('.award-name').toggleClass('active').siblings().removeClass('active'); // not working


		// Txt
		var aTxt = $('p[data="' + x + '"]')[0];
		$(aTxt).toggle();
		$(aTxt).appendTo('.about-content');
			//remove 
			var mTxt = $('.about-content p').not(aTxt);
			$(mTxt).hide();

		// Title
		var aTit = $('h3[data="' + x + '"]')[0];
		$(aTit).toggle();
		$(aTit).appendTo('.sideTitle');
			//remove 
			var mTit = $('.sideTitle h3').not(aTit);
			$(mTit).hide();

		// Pic
		var aPic = $('img[data="' + x + '"]')[0];
		$(aPic).toggle();
		$(aPic).appendTo('.main-image');
			//remove 
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