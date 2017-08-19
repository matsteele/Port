$(document).ready(function(){


	// Show samples
	$('.open-samples').hover(function () {
		$(this).css('background-color', 'rgb(95, 167, 215)');
		$(this).css('color', 'white');
		$(this).css('border', '1px solid white');
	}, function () {
		$(this).css('background-color', 'white');
		$(this).css('color', 'rgb(95, 167, 215)');
		$(this).css('border', '1px solid rgb(95, 167, 215)');
	})

	$('.open-samples').click(function () {
		$(this).fadeTo(200, 1);
		if ($(this).css('opacity') == 1){
			$(this).animate({opacity:0.5}, 200);
			$(this).animate({marginTop: '-20px'}, 200)
			$('.sample-name').slideDown(800);
			$('.cityPoints').css('opacity', '0.5');
			$('.main-column').css('opacity', '0.5');
			$('.bottomContainer').css('opacity', '0');

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

		} else {
			$(this).animate({opacity:1}, 200);
			$(this).animate({marginTop: '0px'}, 200)
			$('.sample-name').unbind('mouseenter mouseleave');
			$('.sample-name').slideUp(800);
			$('.cityPoints').css('opacity', '1');
			$('.main-column').css('opacity', '1');
			$('.bottomContainer').css('opacity', '1');
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

	// Return summary upon leaving modal and displaying a new modal
	$('.modal').on('hidden.bs.modal', function () {
		$('.siteSample').hide();
		$('.modal-body').show();
		$('.modal-content').removeClass("modal-content2");
	})


	//show default summary on image click
	$('.main-image').click(function () {
		$('.about-content').text(resumePoints["mainProfile"][0]["text"]);
		$('.name').insertBefore(".about-content");
		$('.proPic').attr("src", resumePoints["mainProfile"][0]["imgSrc"]);
		$('.sideHeaderTxt').text(resumePoints["mainProfile"][0]["sideHeader"]);
		$('.mainPoints').hide();
		$('<p class="name">MAT STEELE</p><br>').prependTo(".about-content");
	})

	// Show default summary
	$('.main-column').hover(function() {
		$('.sample-name').css("opacity", "0.5");
		$('.showInfo, .maintainHover').css("display", "flex");
		$('.showInfo').css("visibility", "visible");
		$('.sideTitle').show();
		$('.sideHeaderTxt').show();
		$('.cityPoints').css('opacity', '0.5');
		$('.bottomContainer').css('opacity', '0');
	}, function () {
		// $('.sample-name').css("opacity", "1");
		// $('.showInfo, .maintainHover').hide();
	});


// Leaving main-column section, return to default bio
$('.main-column').mouseleave( function(){
	
	$('.about-content').text(resumePoints["mainProfile"][0]["text"]);
	$('.proPic').attr("src", resumePoints["mainProfile"][0]["imgSrc"]);
	// $('.sideHeaderTxt').text(resumePoints["mainProfile"][0]["sideHeader"]);
	$('.bottomContainer').css('opacity', '1');
	$('.active').removeClass('active');

	$('.sample-name').css("opacity", "1");
	$('.showInfo').hide();
	$('.maintainHover').hide();
	$('.showInfo').css("visibility", "hidden");
	$('.edu, .exp').css("margin", "0 auto");

	$('.cityPoints').css('opacity', '1');

	//Add 'Mat Steele' back to bio
	$('<p class="name">MAT STEELE</p><br>').prependTo(".about-content");

	//Hide main points
	if($(".point-button")) {
		$(".point-button").remove();
		$(".mainPoints").hide();
	}

		$('.sideTitle').show();
		$('.sideHeaderTxt').show();
		$('.sideHeaderTxt').text(resumePoints["mainProfile"][0]["sideHeader"]);


});




	var numb = ['1', '2', '3', '4', '5','6', '7'];


	var iconInfo;
	var titleVar;


// Show different experience summaries
	$('.icon-name').each(function(i, value) {
		$(this).click(function (e) {


			// Toggle click background
			$(this).toggleClass('active').siblings().removeClass('active');

			$(".mainPoints ul").hide();


			iconInfo = $(this).attr('id');

			var iconID = $('.pointIcons').attr('id');
			var pointNumb = iconID.charAt(5);


			if($(".point-button")) {
				$(".point-button").detach()
			}

			var iconHeader = resumePoints[iconInfo][0]["sideHeader"]
			var iconText = resumePoints[iconInfo][0]["text"]
			var iconImg = resumePoints[iconInfo][0]["imgSrc"]
			var iconAwards = resumePoints[iconInfo][0]["pointSrc"]
			

			// Show eIcon text for the icons without mainPoints
			$('.about-content').text(iconText);



			titleVar = $('.name');
			$('.name').remove();
			$('.bio').text(iconText);
			$('.proPic').attr("src", iconImg);
			$(".sideTitle h3").text(iconHeader);

			//Show mainpoints when clicking eIcons
			$(".mainPoints").show();


			if (iconAwards) {		
				var iconPointText = resumePoints[iconInfo][pointNumb]["text"]
				$('.about-content').text(iconText);
				$(".mainPoints ul").show();
				$(".mainPoints ul li img").show();
				for (a = 1; a <= iconAwards; a++){

					var pointIconSrc =	resumePoints[iconInfo][a]["pointSrc"] 
					$("#point" + a).append("<img class='point-button exp-button' src=" + pointIconSrc + ">");		
				}
			};

			//Remove .active when going to a new exp icon
			if ($(this)) {
				$('.pointIcons').removeClass('active');
			}

			//----show sidebars----
			$(".about-content p").show();
			$(".sideTitle sideHeaderTxt").css("display", "block");
			$(".sideTitle h3").css("display", "flex");
			$(".sideTitle").css("display", "flex");
			$(".awards ul").show();

			if ($(resumePoints["mainProfile"])) {
				console.log(resumePoints[iconInfo][0])
				$('<p class="name">MAT STEELE</p><br>').prependTo(".about-content");
			}
	
	
		})
	});


// Show different experience summaries
	$('.pointIcons').each(function(i, value) {
		$(this).click(function (e) {

			// Toggle click background
			$(this).toggleClass('active').siblings().removeClass('active');

			// console.log($(this).attr("class"))


			var iconID = $(this).attr('id');
			var pointNumb = iconID.charAt(5);

			// console.log(pointNumb, iconID);
		

			var iconHeader = resumePoints[iconInfo][pointNumb]["sideHeader"]
			var iconText = resumePoints[iconInfo][pointNumb]["text"]
			var iconImg = resumePoints[iconInfo][pointNumb]["imgSrc"]

			$('.about-content').text(iconText)
			$('.proPic').attr("src", iconImg)
			$(".sideTitle h3").text(iconHeader)


			//----show sidebars----
			$(".about-content p").show();
			$(".sideTitle sideHeaderTxt").css("display", "block");
			$(".sideTitle h3").css("display", "flex");
			$(".sideTitle").css("display", "flex");
			$(".awards ul").show();

	
		})
	});

});