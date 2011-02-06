jQuery.fn.popupwindow = function(mysettings)
{

    return this.each(function(index){
        var settings, parameters, b, a, winObj;


        settings = {
            height:600, // sets the height in pixels of the window.
            width:600, // sets the width in pixels of the window.
            toolbar:0, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
            scrollbars:0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
            status:0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
            resizable:1, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
            left:0, // left position when the window appears.
            top:0, // top position when the window appears.
            center:0, // should we center the window? {1 (YES) or 0 (NO)}. overrides top and left
            createnew:1, // should we create a new window for each occurance {1 (YES) or 0 (NO)}.
            location:0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
            menubar:0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
            onUnload:null, // function to call when the window is closed
            modal: false // if true, grey box is used.
        };

        //Overload settings
        for(var i in mysettings) {
            if (mysettings.hasOwnProperty(i)) {
                b = mysettings[i];
                settings[i] = b;
            }
        }

        if (settings.modal) {
            if ($("#GreyBox").length === 0) {
                $("<div id='GreyBox'></div>").css(
                { position:  "absolute",
                  left: "0",
                  top: "0",
                  background: "#000",
                  opacity: 0.7
                }).appendTo($(document.body)).hide();
            }
        }

        // center the window
        if (settings.center == 1)
        {
            settings.top = (screen.height-(settings.height + 110))/2;
            settings.left = (screen.width-settings.width)/2;
        }

        parameters = "location=" + settings.location + ",menubar=" + settings.menubar + ",height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars  + ",status=" + settings.status + ",resizable=" + settings.resizable + ",left=" + settings.left  + ",screenX=" + settings.left + ",top=" + settings.top  + ",screenY=" + settings.top;

        jQuery(this).bind("click", function(){
            var name = settings.createnew ? "PopUpWindow" + index : "PopUpWindow";

            if (settings.modal) {
                $("#GreyBox").css({
                    width: $(document).width(),
                    height: $(document).height()
                }).show();
            }

            winObj = window.open(this.href, name, parameters);
            if (settings.onUnload || settings.modal) {
                // Incremental check for window status
                // Attaching directly to window.onunlaod event causes invoke when document within window is reloaded
                // (i.e. an inner refresh)
                unloadInterval = setInterval(function() {
                    if (!winObj || winObj.closed) {
                        clearInterval(unloadInterval);
                        if (settings.onUnload) {
                            settings.onUnload.call($(this));
                        }
                        if (settings.modal) {
                            $("#GreyBox").hide();
                        }
                    }
                },500);
            }

            winObj.focus();

            return false;
        });
    });

};