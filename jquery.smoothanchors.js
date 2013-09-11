jQuery(function($) {
// ---------------------------------------------------------------------------------------------

// --------------------------------------------- set variables --
var scrollAnchors = $('a[href^=#]'),
	scrollSpeed = 1000,
	topOffset = 50;

// --------------------------------------------- trigger on click event --
scrollAnchors.click(function(e){

	var el = $(this),
		elLink = el.attr("href");
		
	// ----- trigger if link isn't just # (placeholder href) -----
	if(elLink != '#'){
		var lmntName = elLink.replace('#',''),
			lmnt = $('a[name='+lmntName+']'),
			
			// ----- find top offset of target element -----
			scrollAmt = lmnt.offset().top,
			scrollAmt = parseInt(scrollAmt) - topOffset;
		
		// ----- animate to target element (minus topOffset) -----
		$('html,body').animate({ scrollTop: scrollAmt }, scrollSpeed);
	}
	
	// ----- prevent default click action -----
	e.preventDefault();
});


// ---------------------------------------------------------------------------------------------
});