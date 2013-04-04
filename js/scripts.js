$(document).ready(function() {
	
	//Initial iframe src
	loadIframe("gaia-building-blocks/style/action_menu/index.html");

  //insert css in iframe
  $("#phone-content").load(function() {
    var $head = $("#phone-content").contents().find("head");                
    $head.append($("<link/>", 
        { rel: "stylesheet", href: "bb_cross_browser.css", type: "text/css" }
    ));      
	}); 

	function loadIframe(url) {
    var $iframe = $("#phone-content");
    if ($iframe.length) {
      $iframe.attr("src", url);   
      return false;
    }
    return true;
	}

	$("#menu button").click(function() {
		loadIframe($(this).data("link"));
		$("#menu button.selected").removeClass("selected");
		$(this).addClass("selected");
	});

});