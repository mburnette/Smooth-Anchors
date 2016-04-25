jQuery.fn.smoothAnchors = function(options){

	var defaults = {

		topOffset: 50,
		scrollSpeed: 1000

	};

	var config = jQuery.extend(defaults, options);

	this.each(function(){

		jQuery(this).on('click', function(e){
			// ----- prevent default click action -----
			e.preventDefault();
			
			var el = jQuery(this),
				elLink = el.attr("href");

			// ----- trigger if link isn't just # (placeholder href) -----
			if(elLink != '#'){
				var lmntName = elLink.replace('#',''),
					lmnt;
				
				// check if targeting "name" or "id" of an element	
				if(jQuery('a[name='+lmntName+']').length > 0){
					lmnt = jQuery('a[name='+lmntName+']');
				} else if(jQuery('[id='+lmntName+']').length > 0){
					lmnt = jQuery('[id='+lmntName+']');
				}

				// ----- find top offset of target element -----
				var scrollAmt = lmnt.offset().top;
				scrollAmt = parseInt(scrollAmt) - config.topOffset;

				// ----- animate to target element (minus topOffset) -----
				jQuery('html,body').animate({ scrollTop: scrollAmt }, config.scrollSpeed);
				
			}

		});

	});

	return this;

}
