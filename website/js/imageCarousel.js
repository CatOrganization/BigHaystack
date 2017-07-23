$(document).ready(function() {
	var carouselContainer = $('#divImageCarousel');
	// The wrapper is contained within carouselContainer
	var carouselWrapper = $('#divCarouselWrapper');
	var indicatorList = $('#olIndicators');
	var carouselSlides = $('#divCarouselSlides');

	var placeholderDir = 'img/carousel_images/';
	var images = ['placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'];

	for (var i = 0; i < images.length; i++) {
		carouselSlides.append(createImageSlide(placeholderDir + images[i], i + 1));
		indicatorList.append(createIndicator(i + 1))
	}

	$('#divSlide1').toggleClass('active');
	$('#liIndicator1').toggleClass('active');


});

function createImageSlide(imageSrc, imageNum) {
	var slide = document.createElement('DIV');
	var image = document.createElement('IMG');
	slide.setAttribute('class', 'carousel-item');
	image.setAttribute('src', imageSrc);
	image.setAttribute('class', 'carousel-image mx-auto');
	slide.setAttribute('id', 'divSlide' + imageNum);

	slide.appendChild(image);
	return slide;
}

function createIndicator(indicatorNum) {
	var indicator = document.createElement('LI');
	indicator.setAttribute('data-target', '#divCarouselWrapper');
	// offset this back to zero indexed
	indicator.setAttribute('data-slide-to', indicatorNum - 1);
	indicator.setAttribute('id', 'liIndicator' + indicatorNum);
	return indicator;
}