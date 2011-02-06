#PopUpWindow plugin for jQuery

Takes a link and will create a popupwindow based on the href of the link. You can over ride the default settings by passing your own settings into popupwindow.

PopUpWindow can be used to emulate Google's OpenId+Oauth Hybrid signin demo.  See: http://googlecodesamples.com/hybrid/ .

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

