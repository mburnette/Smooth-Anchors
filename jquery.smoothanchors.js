jQuery.fn.smoothAnchors = function(options){

	var defaults = {

		topOffset: 50,
		scrollSpeed: 1000

	};

	var config = jQuery.extend(defaults, options);

	this.each(function(){

		jQuery(this).click(function(e){
			var el = jQuery(this),
				elLink = el.attr("href");

			// ----- trigger if link isn't just # (placeholder href) -----
			if(elLink != '#'){
				var lmntName = elLink.replace('#',''),
					lmnt = jQuery('a[name='+lmntName+']');

					// ----- find top offset of target element -----
				var scrollAmt = lmnt.offset().top;
				console.log(scrollAmt);
				scrollAmt = parseInt(scrollAmt) - config.topOffset;
				console.log(scrollAmt);

				// ----- animate to target element (minus topOffset) -----
				jQuery('html,body').animate({ scrollTop: scrollAmt }, config.scrollSpeed);
				
				// ----- prevent default click action -----
				e.preventDefault();
			}

		});

	});

	return this;

}
