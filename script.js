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

		// Find a way to return to the beginning of main-summary when hovering back to proPic
		// $('.icon-name').removeClass('active');
		// $('.name, .bio').show();
		// $('.icoText' + numb[i]).hide();
		
	});

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


	var awd = ['a', 'b'];


// var i = 0;
// function changeClass(){
//     $("#rabbit").removeClass("rabbit" + i)
//         i = (i==7)?1:i+1;    
//     $("#rabbit").addClass("rabbit" + (i));
    
// }

	$('.award-name7a').click(function () {
			// e.preventDefault();

			var aTxt = $('.icoText7a');
			
			// var aTxt = $('.icoText' + txt[i] + awd[i]);
			// console.log(aTxt);

			var mTxt = $('.icoText7');
			// var mTxt = $('.icoText' + txt[i]);

			var aPic = $('.icoPic7a')
			// var aPic = $('.icoPic' + txt[i] + awd[i]);
			var mPic = $('.proPic');


			// Add award text and hide main text
			aTxt.appendTo('.about-content');
			aTxt.toggle();
			mTxt.hide();

			// Add award pic and hide main pic
			aPic.toggle();
			aPic.appendTo('.main-image');
			mPic.hide();

			if ( aTxt.is(':visible') && aPic.is(':visible') ) {
				aPic.show();
			} else {
				mTxt.show();
				mPic.show();
			}
	});

	$('.award-name7b').click(function () {
			// e.preventDefault();

			var aTxt = $('.icoText7b');
			
			// var aTxt = $('.icoText' + txt[i] + awd[i]);
			// console.log(aTxt);

			var mTxt = $('.icoText7');
			// var mTxt = $('.icoText' + txt[i]);

			var aPic = $('.icoPic7b')
			// var aPic = $('.icoPic' + txt[i] + awd[i]);
			var mPic = $('.proPic');


			// Add award text and hide main text
			aTxt.appendTo('.about-content');
			aTxt.toggle();
			mTxt.hide();

			// Add award pic and hide main pic
			aPic.toggle();
			aPic.appendTo('.main-image');
			mPic.hide();

			if ( aTxt.is(':visible') && aPic.is(':visible') ) {
				aPic.show();
			} else {
				mTxt.show();
				mPic.show();
			}
	});

// Click on award icon
// Display award text and hide main text
// Display award pic and hide main pic
// var txt = ['1', '2', '3', '4', '5', '6', '7'];
// var awd = ['a', 'b'];

// $('.awards ul li i').each(function (i, value) {
// 	var mTxt = '.icoText' + txt[i];
// 	// console.log($(mTxt));

// 	$(mTxt).each(function (i, value) {
// 		$('.awards ul li i').click(function (e) {
// 			aTxt = mTxt + awd[i];
// 			aTxt = $(aTxt);
// 			mTxt = $(mTxt);
// 			console.log(mTxt);

// 			// Add award text and hide main text
// 			aTxt.appendTo('.about-content');
// 			aTxt.toggle();
// 			mTxt.hide();
// 		})
// 	})
// })
// var awd = ['a', 'b'];

// $('.awards ul li i').each(function (i, value) {
// 	$(this).click(function (e) {
// 		var aTxt = $('.icoText7' + awd[i]);
// 		console.log(aTxt);
// 		var mTxt = $('.about-content p');

// 		aTxt.appendTo('.about-content');
// 		aTxt.toggle();
// 		mTxt.hide();

// 	})
// })

// var awd = [2,3,4,5];

// $('.about-content div p:nth-of-type(n+1)').each(function (i, value) {
// 	$('.awards ul li i').click(function (e) {
// 		aTxt = $('.about-content div p:nth-of-type('+ i +')');
// 		console.log(aTxt);
// 		aTxt.appendTo('.about-content');
// 		aTxt.toggle();
// 	})
// })

// Target each div icoText(i) and any li below it list them in html



// $(document).ready(function(){
// 	$('.roomSVGs').click(function(){
// 		var id = $(this).attr('class');

// 		IDArray = id.split(" ");

// 		var link = 'index.html#' + IDArray[0];

// 		$(location).attr('href', link);
// 	});
// });




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