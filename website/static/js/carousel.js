$(document).ready(function () {
    createImages();
    createTestimonials();
});

function createImages() {
    var indicatorList = $('#olImageIndicators');
    var carouselSlides = $('#divImageSlides');

    var placeholderDir = 'img/carousel_images/';
    var images = ['placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'];

    for (var i = 0; i < images.length; i++) {
        carouselSlides.append(createImageSlide(placeholderDir + images[i], i + 1));
        indicatorList.append(createIndicator(i + 1, '#divImageWrapper'))
    }

    $('#divImageSlide1').toggleClass('active');
    $('#liImageIndicator1').toggleClass('active');
}

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

function createIndicator(indicatorNum, target) {
    var indicator = document.createElement('LI');
    var capTarget = capitalizeFirstLetter(target);
    indicator.setAttribute('data-target', '#div' + capTarget + 'Wrapper');
    indicator.setAttribute('id', 'li' + capTarget + 'Indicator' + indicatorNum);
    indicator.setAttribute('class', target + '-indicator');
    // offset this back to zero indexed
    indicatorNum = (indicatorNum - 1).toString();
    indicator.setAttribute('data-slide-to', indicatorNum);
    return indicator;
}

function createTestimonials() {
    var indicatorList = $('#olTestimonialIndicators');
    var testimonialSlides = $('#divTestimonialSlides');
    var data = testimonialData();
    var indicator;

    for (var i = 3; i <= data.length; i += 3) {
        testimonialSlides.append(testimonialItem(data.slice(i - 3, i), i / 3));
        indicator = createIndicator(i / 3, 'testimonial');
        indicatorList.append(indicator);

    }
    $('#liTestimonialIndicator1').toggleClass('active');
    $('#divTestItem1').toggleClass('active');
}

function testimonialItem(data, itemNum) {
    var carouselItem = document.createElement('DIV');
    carouselItem.setAttribute('id', 'divTestItem' + itemNum);
    carouselItem.setAttribute('class', 'carousel-item');

    var row = testimonialRow(data);

    carouselItem.appendChild(row);
    return carouselItem;
}

function testimonialRow(data) {
    var container = document.createElement('DIV');
    container.setAttribute('class', 'container-fluid');
    var row = document.createElement('DIV');
    row.setAttribute('class', 'row testimonial-row');

    for (var i = 0; i < data.length; i ++) {
        var card = testimonialCard(data[i]);
        row.appendChild(card);
    }
    container.appendChild(row);
    return container;
}

function testimonialCard(data) {
    var cardsWide = 3;
    var columnSize = 12 / cardsWide;
    var col = document.createElement('DIV');
    col.setAttribute('class', 'col-md-' + columnSize);
    var card = document.createElement('DIV');
    card.setAttribute('class', 'card');

    card.appendChild(head(data.image));
    card.appendChild(block(data.name, data.text));
    col.appendChild(card);

    return col;
}

function head(imagePath) {
    var head = document.createElement('DIV');
    head.setAttribute('class', 'testimonial-head');
    var image = document.createElement('IMG');
    image.setAttribute('src', imagePath);
    head.appendChild(image);

    return head
}

function block(name, text) {
    var block = document.createElement('DIV');
    block.setAttribute('class', 'card-block');
    var nameHeader = document.createElement('H3');
    nameHeader.setAttribute('class', 'card-title');
    var textP = document.createElement('P');
    textP.setAttribute('class', 'card-text');

    nameHeader.appendChild(document.createTextNode(name));
    textP.appendChild(document.createTextNode(text));

    block.appendChild(nameHeader);
    block.appendChild(textP);

    return block;
}

function testimonialData() {
    var image = 'http://www.pclodge.com/wp-content/uploads/2014/08/placeholder.png';
    return [
        {
            'name': 'Joe John',
            'text': 'My name is Joe John and I endorse Big Haystack they find me my job.',
            'image': image
        },
        {
            'name': 'Susan Withers',
            'text': 'My name is Susan Withers and I endorse Big Haystack they find me my job.',
            'image': image
        },
        {
            'name': 'Alex Alexandre',
            'text': 'My name is Alex Alexandre and I endorse Big Haystack they find me my job.',
            'image': image
        },
        {
            'name': 'Jim Jones',
            'text': 'My name is Jim Jones and I endorse Big Haystack they find me my job.',
            'image': image
        },
        {
            'name': 'Ted Bundy',
            'text': 'My name is Ted Bundy and I endorse Big Haystack they find me my job.',
            'image': image
        },
        {
            'name': 'Jack Ripper',
            'text': 'My name is Jack Ripper and I endorse Big Haystack they find me my job.',
            'image': image
        },
    ];

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}















