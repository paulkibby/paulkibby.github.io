setTimeout(function() {
    $('#base div').fadeOut(450);

    setTimeout(function() {
        $('#loving').fadeOut(450);

        setTimeout(function() {
            $('.loading').fadeOut(450);
        }, 500);
    }, 300);
}, 2000);

// $('.loading, #loving, #base div').fadeOut(150);

scrollTo('#main');

var topPos = Math.floor($('.heart').offset().top);
var leftPos = Math.floor($('.heart').offset().left);

function appendHeart() {
    let container = document.querySelector(".heart-container");

    let heart = `
        <div class="heart1" style="top:${topPos+4}px; left:${leftPos+4}px; z-index: 100;">
          <svg id="color" enable-background="new 0 0 34 34" height="512" viewBox="0 0 34 34" width="512" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="10%" stop-color="#e74c3c" />
                <stop offset="90%" stop-color="#FF3C30" />
              </linearGradient>
            </defs>
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
        </div>
    `;
  
    container.insertAdjacentHTML("beforeend", heart);
}

function startHeart() {
    for (let i = 0; i < 10; i++) {
        appendHeart();
    }
}

$('#check').on('change', function() {
    if ( $(this).prop('checked') ) {
        topPos = Math.floor($('.heart').offset().top);
        leftPos = Math.floor($('.heart').offset().left);

        $('body').on('mousemove', function(e) {
            gsap.to(".heart1", {
                x: e.clientX-(leftPos+28),
                y: e.clientY-(topPos+24),
                stagger: 0.2
            });
        });
    
        startHeart();

        ilyTimer = setTimeout(function() {
            scrollTo('#i_like_you');
            
            h = 0;
            myLoop();
        }, 8000);
    } else {
        clearTimeout(ilyTimer);
        $('body').off('mousemove');
        $('.heart1').fadeOut(450);
        setTimeout(function() { $('.heart1').remove() }, 450);
    }
});

$('.valentine__up').on('click', function() {
    scrollTo('#main');

    setTimeout(function() {
        $('body').css({'overflow-y':'auto'});
    }, 500);
});

var phrases = [
    "<span style=\"color: #f44336;\">❤</span> Me pelqen ti <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Gustatzen zait <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Харесвам те <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> sviđaš mi se <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Rwy'n hoffi chi <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Kedvellek <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Gústasme <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Ik vind je leuk <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> μου αρέσεις <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Jeg kan lide dig <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> איך גלייך דיר <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Is maith liom thú <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Mér líkar við þig <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Me gustas <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Mi piaci <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> M'agrades tu <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Tu man patīc <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Tu man patinki <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Ми се допаѓаш <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Togħġobni <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Ich mag dich <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Jeg liker deg <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Lubię cię <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Gosto de você <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Îmi placi <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Свиђаш ми се <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Mám ťa rád <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Všeč si mi <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Pidän sinusta <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Je t'aime bien <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Sviđaš mi se <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Mám tě rád <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Jag gillar dig <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Sa meeldid mulle <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Ek hou van jou <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Ngiyakuthanda <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> I masịrị m <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Mo fẹran rẹ <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Kea u rata <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Waan ku jecelahay <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Nakupenda <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Ти мені подобаєшся <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Ina son ku <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Ты мне падабаешся <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Umandisangalatsa <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Mi ŝatas vin <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Mwen renmen ou <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> I like you <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> EGO amo te <span style=\"color: #f44336;\">❤</span>",
    "<span style=\"color: #f44336;\">❤</span> Ты мне нравишься <span style=\"color: #f44336;\">❤</span>"
];

myWords = [
    "Ой!!",
    "ААААААААААААААА!!!!!",
    "ПОКАЗАЛОСЬ!!",
    "<span style=\"color: #f44336;\">❤</span>"
];

function scrollTo(href) {
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,
        easing: "swing"
    });
}

var g = 0;
function myWordsLoop() {
    setTimeout(function() {
        $('.i-like-you__text').html(myWords[g]);
        g++;

        if (g < myWords.length) {
            myWordsLoop();
        } else {
            setTimeout(function() {
                scrollTo('#valentine');

                setTimeout(function() {
                    $('.envelope').addClass('envelope-scale');
                    setTimeout(function() { $('.envelope').removeClass('envelope-scale'); }, 1000);
                }, 800);
            }, 2200);
        }
    }, 1800);
}

var h = 0;
function myLoop() {
    setTimeout(function() {
        $('.i-like-you__text').html(phrases[h]);
        h++;
        
        if (h < 50) {
            myLoop();
        } else {
            myWordsLoop();
        }
    }, 1+(h*10));
}

$('.envelope').on('mouseover', function(e) {
    $('.envelope__top').removeClass('envelope__top_close');
    $('.paper').removeClass('paper_close');
});

$('.envelope').on('mouseleave', function(e) {
    $('.envelope__top').addClass('envelope__top_close');
    $('.paper').addClass('paper_close');
});
