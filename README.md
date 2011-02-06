#Modal Popup Window plugin for jQuery

This plugin makes it easy to emulate the behavior in [Google's OpenId+Oauth Hybrid signin demo]("http://googlecodesamples.com/hybrid/")


##Installation
   
To use just include the plugin in the HEAD section of the page **AFTER** calling jQuery. After that, use jQuery to find the links you want and pass any parameters you want.

	<html>
	<head>
		<script type="text/javascript"src="http://code.jquery.com/jquery-latest.js"></script>
		<script type="text/javascript" src="jquery.popupwindow.js"></script>
		<script type="text/javascript">
		$(function()
		{
			$(".popupwindow").popupwindow(
                            {
                                center: true,
                                modal: true
                            }
                        );
		});
		</script>
	</head>
	<body>
		<a href="http://www.jquery.com" title="jQuery homepage" class="popupwindow"/>
	</body>
	</html>

