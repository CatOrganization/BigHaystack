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
        indicatorList.append(createIndicator(i + 1, 'image'))
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
    slide.setAttribute('id', 'divImageSlide' + imageNum);

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
    textP.setAttribute('class', 'card-text testimonial-text');

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
            'text': 'Mary is thorough, has a sense of urgency, great follow through and researches each role to fully understand the unique qualifications and nuances for placing the right person in the right position. She has the uncanny ability to determine quickly if the candidate has the personality and skills to mesh with the culture and role. Mary has the utmost integrity, blends and balances confidentiality between client and candidate plus she is an outstanding coach to fully prepare the candidate as the search progresses. She provides an "outside-in" perspective to the decision making process. Over 40 candidates were hired through Mary Morris and the retention rate was ~90%.',
            'image': image
        },
        {
            'name': 'Susan Withers',
            'text': 'I recently had the opportunity to work with Mary. In the process I found Mary to always maintain the highest level of professionalism. Her follow through, diligence to timelines and deadlines, thoroughness, integrity and total support through the process I witnessed is a testimony to not only Mary, but her leadership style as well. I would highly recommend Mary to any company seeking help from an executive search firm/recruiter.',
            'image': image
        },
        {
            'name': 'Alex Alexandre',
            'text': 'I have used Mary Morris, twice this year to hire both a sales account executive and an Industry Consultant for the Aerospace sector. Mary worked harder than any recruiter I have used in the past to really understand our requirements and to find the best candidate possible. In both cases, we brought our own found candidates to the interview process and both times, we selected the candidates that Mary provided. Her prescreening of the candidates saved me time by only presenting people she knew would fit the job and personalities we were looking for. In the future, Mary is the first person I will go to when trying to find exceptional people from the various manufacturing sectors.',
            'image': image
        },
        {
            'name': 'Jim John',
            'text': 'Mary is the perfect recruiter, she spent time with me understanding and clarifying my objectives for the role; then she submitted candidates that matched perfectly and did not waste time on candidates that were not what I was looking for. The result was a quick short list and a positive hire. I will use her again!',
            'image': image
        },
        {
            'name': 'Ted Bun',
            'text': 'Mary is one of the top recruiters I have worked with. She took the search very seriously, consistently found outstanding candidates for me to interview and was very helpful in working out a win / win with the selected candidate.',
            'image': image
        },
        {
            'name': 'Jack Ripiere',
            'text': 'Mary did a great job finding me candidates that met some complex criteria. Good listener in terms of interpreting what I wanted. Good follow-up. Experienced recruiter.',
            'image': image
        },
        {
            'name': 'Joe John',
            'text': 'Mary did a great job finding me candidates that met some complex criteria. Good listener in terms of interpreting what I wanted. Good follow-up. Experienced recruiter.',
            'image': image
        },
        {
            'name': 'Susan Withers',
            'text': 'Mary’s knowledge of her clients’ business and requirements really separate her from other recruiters. She was thoughtful to ensure I would be the right fit throughout the process of recruiting and placing me in my current position. Follow-up was also outstanding.',
            'image': image
        },
        {
            'name': 'Alex Alexandre',
            'text': 'Mary is the most incredibly through, detail-oriented executive recruiter I have ever encountered. As an executive having worked for large hospitality organizations, Mary’s integrity and ability to provide results is the best in the industry.',
            'image': image
        },
        {
            'name': 'Jim John',
            'text': 'I have been dealing with executive recruiters for a few years now. Hands down Mary is the best, most professional recruiter I have ever worked with. Straight-forward, highly transparent and consultative through-out the recruiting process, and possessing really outstanding people skills, I can recommend Mary without hesitation.',
            'image': image
        }
    ];

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}















