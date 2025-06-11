
$(document).ready(function() {
    
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 800);
    });
    
    
    $(window).scroll(function() {
        $('.animated').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });
    

    

    $(window).trigger('scroll');
    
    
    setTimeout(function() {
        $('.hero-title').addClass('animated');
        setTimeout(function() {
            $('.hero-subtitle').addClass('animated');
        }, 300);
    }, 100);
});

const images = [
    'images/IMG_8080.jpg'
];

let currentIndex = 0;
const bgElement = document.querySelector('.hero-bg-pattern.slideshow');

function changeBackground() {
    bgElement.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 6000); // Каждые 6 секунд
changeBackground(); 
