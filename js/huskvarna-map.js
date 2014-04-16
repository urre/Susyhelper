$(function() {

	var map, infoBubble, marker;

	// Map styling
	var hva_map_style =


	[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-5},{"saturation":-97}]}]

	var markerData = [
	    ['Huskvarna Stadshotell', 57.791425, 14.274993, 'Huskvarna Stadshotell', 'Erik Dahlbergsgatan 20', '561 32 Huskvarna', '036-130507', 'info@huskvarnastadshotell.se', 'www.huskvarnastadshotell.se'],
	];

	var arrMarkers = [];

	    // Cross browser touch device check, works on IE10 on Windows Phone 8/WinRT
	    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

	    // Setup a couple of customizable attributes for desktop/device
	    var device_scroll, device_zoom, device_draggable, device_autopan, device_default_ui, device_zoom_control, device_pan_control;

	    // Different map controlls/behaviour for touch/non touch devices
	    supportsTouch ? device_scroll       = false  : device_scroll = false;
	    supportsTouch ? device_zoom         = 7  : device_zoom = 7;
	    supportsTouch ? device_draggable    = true  : device_draggable = true;
	    supportsTouch ? device_autopan      = true  : device_autopan = true;
	    supportsTouch ? device_default_ui   = true  : device_default_ui = false;
	    supportsTouch ? device_zoom_control = false  : device_zoom_control = true;
	    supportsTouch ? device_pan_control  = false  : device_pan_control = true;

	    // New Google map
	    map = new google.maps.Map(document.getElementById('map'), {
	        center           : new google.maps.LatLng(57.791425, 14.274993),
	        zoom             : device_zoom,
	        scrollwheel      : device_scroll,
	        panControl       : device_pan_control,
	        zoomControl      : device_zoom_control,
	        scaleControl     : true,
	        disableDefaultUI : device_default_ui,
	        draggable        : device_draggable,
	        styles           : hva_map_style,
	        mapTypeControl   : false,
	        streetViewControl: false
	    });

	function addMarker (pos, title) {
	    marker = new google.maps.Marker({
	        map: map,
	        position: pos,
	        icon: 'http://huskvarna.loc/wp-content/themes/huskvarna/images/pin.svg',
	    });

	    // InfoBubble using http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobubble/src/infobubble.js
		infoBubble = new InfoBubble({
	        content: '<div class="content"><span class="close">×</span><h1>' + store_title + '</h1><p>'+store_name+'<br>'+store_adress+'<br>'+store_padress+'<br>'+store_phone+'<br><a href="mailto:'+store_email+'">'+store_email+'</a><br><a class="btn btn--tiny btn--primary" href="https://www.google.com/maps/dir//Huskvarna+Stadshotell+AB,+Erik+Dahlbergsgatan+20,+561+32+Huskvarna,+Sweden/@57.79135,14.275166,17z/data=!4m12!1m3!3m2!1s0x465a6d29149c5d67:0x59214dbf773c7df5!2sHuskvarna+Stadshotell+AB!4m7!1m0!1m5!1m1!1s0x465a6d29149c5d67:0x59214dbf773c7df5!2m2!1d14.275166!2d57.79135">Vägbeskrivning</a><br></p></div>',
	        boxClass: 'info-box',
	        padding: 0,
	        closeBoxMargin: '0px',
	        borderColor: '#333',
	        borderRadius: '0',
	        borderColor: '#fff',
	        maxWidth: 400,
	        minWidth: 200,
	        maxHeight: 240,
	        disableAutoPan: device_autopan,
	        hideCloseButton: true,
	        backgroundColor: '#893881',
	        backgroundClassName: 'hvamap'
	    });

	return marker;
	}

	// Loop marker array and plot markers
	for (i = 0; i < markerData.length; i++) {
	    var pos = new google.maps.LatLng(markerData[i][1], markerData[i][2]);

	    var store_title   = markerData[i][0];
	    var store_name    = markerData[i][3];
	    var store_adress  = markerData[i][4];
	    var store_padress = markerData[i][5];
	    var store_phone   = markerData[i][6];
	    var store_email   = markerData[i][7];
	    var store_webb    = markerData[i][8];

	    var new_marker = addMarker(pos, store_title, store_name, store_adress, store_padress, store_phone, store_email, store_webb);
	    arrMarkers.push(new_marker);
	}


	/**
	 * Events
	 */

	// Custom close button
	$(infoBubble.bubble_).on("click", function() {
	    infoBubble.close();
	});

	// Close bubble on map click
	google.maps.event.addListener(map, "click", function () {
	    infoBubble.close();
	});

	// Add click events to markers
	google.maps.event.addListener(marker, 'click', function () {
	    if (!infoBubble.isOpen()) {
	        infoBubble.open(map, marker);
	    }
	});

	// When the map is fully loaded
	google.maps.event.addListenerOnce(map, 'idle', function(){

	});

});