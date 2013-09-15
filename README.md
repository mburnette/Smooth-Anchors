#smoothAnchors.js

###Easy smooth scrolling to HTML anchors.

With this plugin, you can easily set up smooth scrolling from your anchor tag to your anchors on the page.

***

##Demo

Check out the demo on CodePen:
<a href="http://codepen.io/mburnette/pen/gJyuD">Smooth Anchors Demo</a>

***

##Usage

To use the plugin:

1- Add the JS file to your project. (jQuery must be present as well.)

	<script src="jquery.smoothanchors.js"></script>

2- Initialize the plugin (Using the selector provided is recommended, but not required.)

	$('a[href^=#]').smoothAnchors();

***

##Options

To change the scroll speed or top offset, simply pass the values in when initializing the function.

	$('a[href^=#]').smoothAnchors({
		scrollSpeed: 1000,
		topOffset: 50
	});

<table>
<tr><td><strong>option</strong></td><td><strong>default</strong></td></tr>
<tr><td><strong>topOffset</strong></td><td>The top offset option determines the amount of space between where the page scrolls and the anchor's actual position, keeping text from touching the top of the browser window.<br/><em>default: 50</em></td></tr>
<tr><td><strong>scrollSpeed</strong></td><td>The scroll speed option determines how fast (in milliseconds) the page will scroll on click.<br/><em>default: 1000</em></td></tr>
</table>

_jQuery is required for this script to work._
