#Smooth-Anchors

###Easy smooth scrolling to HTML anchors.

With this plugin, you can easily set up smooth scrolling from your anchor tag to your anchors on the page.

***

##Usage

To use the plugin:

1- Add the JS file to your project. (jQuery must be present as well.)

	<script src="jquery.smoothanchors.js"></script>

2- Initialize the plugin (Using the selector provided is recommended, but not required.)

	$('a[href^=#]').smoothAnchors();

##Options

To change the scroll speed or top offset, simply pass the values in when initializing the function.

	$('a[href^=#]').smoothAnchors({
		scrollSpeed: 1000,
		topOffset: 50
	});


_jQuery is required for this script to work._