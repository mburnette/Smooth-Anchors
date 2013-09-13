$.fn.smoothAnchors = function(options){

	var defaults = {

		topOffset: 50,
		scrollSpeed: 1000

	};

	var config = $.extend(defaults, options);

	this.each(function(){

		$(this).click(function(e){
			var el = $(this),
				elLink = el.attr("href");

			// ----- trigger if link isn't just # (placeholder href) -----
			if(elLink != '#'){
				var lmntName = elLink.replace('#',''),
					lmnt = $('a[name='+lmntName+']');

					// ----- find top offset of target element -----
				var scrollAmt = lmnt.offset().top;
				console.log(scrollAmt);
				scrollAmt = parseInt(scrollAmt) - config.topOffset;
				console.log(scrollAmt);

				// ----- animate to target element (minus topOffset) -----
				$('html,body').animate({ scrollTop: scrollAmt }, config.scrollSpeed);
			}

			// ----- prevent default click action -----
			e.preventDefault();
		});

	});

	return this;

}