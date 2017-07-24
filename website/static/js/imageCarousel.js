$(document).ready(function() {
	var carouselContainer = $('#divImageCarousel');
	// The wrapper is contained within carouselContainer
	var carouselWrapper = $('#divCarouselWrapper');
	var indicatorList = $('#olIndicators');

	var palceholderDir = "../images/carousel_images/";
	var images = ["placeholder1", "placeholder2", "placeholder3"];

	for (i in images) {
		var image = palceholderDir + images[i];
		var slide = document.createElement("DIV");
		slide.setAttribute("class", "item active");
		
	}


});