// Preloader page
function loader(){
    $('#preloader').addClass('d-none');
    // document.getElementById('preloader').classList.add('d-none');
}

// Lazyload
const myLazyLoad = new LazyLoad({
    elements_selector: "img"
})

// Show and hide scroll to top button
var BackToTopButton = $('#BackToTopButton');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
    BackToTopButton.addClass('show');
} else {
    BackToTopButton.removeClass('show');
}
});


// Minimize comments text
jQuery(function(){
    
    var minimized_elements = $('p.minimize');
    var minimize_character_count = 35;    

    minimized_elements.each(function(){    
        var t = $(this).text();        
        if(t.length < minimize_character_count ) return;

        $(this).html(
            t.slice(0,minimize_character_count )+'<span>...</span>'
        );
    }); 
});


// Minimize big text
jQuery(function(){
    
    var minimized_elements_big = $('p.minimize-big');
    var minimize_character_count_big = 140;    

    minimized_elements_big.each(function(){    
        var t = $(this).text();        
        if(t.length < minimize_character_count_big ) return;

        $(this).html(
            t.slice(0,minimize_character_count_big )+'<span>...</span>'
        );
    }); 
});


// Plan price selector
function PlanPricingData(name) {

    // Toggle button Month plans
    var RadioMonth = document.getElementById("toggle-month");

    // Toggle button Year plans
    var RadioYear = document.getElementById("toggle-year");

    if (name == "Year") {

        // This is for Normal plan option
        document.getElementById("PlanPriceNormalYear").style.display = "block";
        document.getElementById("PlanPriceNormalMonth").style.display = "none";
        document.getElementById("PlanNormalMonth").disabled = true;
        document.getElementById("PlanNormalYear").disabled = false;

        // This is for Normal plan option
        document.getElementById("PlanPriceGoldYear").style.display = "block";
        document.getElementById("PlanPriceGoldMonth").style.display = "none";
        document.getElementById("PlanGoldMonth").disabled = true;
        document.getElementById("PlanGoldYear").disabled = false;

        // This is for Normal plan option
        document.getElementById("PlanPriceBasicYear").style.display = "block";
        document.getElementById("PlanPriceBasicMonth").style.display = "none";
        document.getElementById("PlanBasicMonth").disabled = true;
        document.getElementById("PlanBasicYear").disabled = false;
    } else if (name == "Month") {

        // This is for Normal plan option
        document.getElementById("PlanPriceNormalYear").style.display = "none";
        document.getElementById("PlanPriceNormalMonth").style.display = "block";
        document.getElementById("PlanNormalMonth").disabled = false;
        document.getElementById("PlanNormalYear").disabled = true;
        
        // This is for Normal plan option
        document.getElementById("PlanPriceGoldYear").style.display = "none";
        document.getElementById("PlanPriceGoldMonth").style.display = "block";
        document.getElementById("PlanGoldMonth").disabled = false;
        document.getElementById("PlanGoldYear").disabled = true;

        // This is for Normal plan option
        document.getElementById("PlanPriceBasicYear").style.display = "none";
        document.getElementById("PlanPriceBasicMonth").style.display = "block";
        document.getElementById("PlanBasicMonth").disabled = false;
        document.getElementById("PlanBasicYear").disabled = true;
    } else {
        //
    }
}


// Mobile menu
try {
    const menu = new MmenuLight( document.querySelector("#mobileMenu"), 'all');
    const navigator = menu.navigation({
        selectedClass: 'Selected',
        slidingSubmenus: true,
        title: 'آژانس پژواک',
    });
    const drawer = menu.offcanvas({
        position: 'right',
    });
    document.querySelector( 'a[href="#mobileMenu"]' )
    .addEventListener( 'click', ( evnt ) => {
        evnt.preventDefault();
        drawer.open();
    });
} catch (error) {
    // 
}


// Aos js
try {
    AOS.init({
        disable: ('phone', 'tablet', 'mobile'),
        duration: 1200,
        once: true,
    });
} catch (error) {
    // 
}


// Move to js library
try {
    const moveTo = new MoveTo({
        duration: 1500,
    });
    const ScrollToHome = document.getElementsByClassName('ScrollToHome')[0];
    moveTo.registerTrigger(ScrollToHome);
    const ScrollToHomeMobile = document.getElementsByClassName('ScrollToHomeMobile')[0];
    moveTo.registerTrigger(ScrollToHomeMobile);
    
    const ScrollToTop = document.getElementsByClassName('ScrollToTop')[0];
    moveTo.registerTrigger(ScrollToTop);
    
    const ScrollToServices = document.getElementsByClassName('ScrollToServices')[0];
    moveTo.registerTrigger(ScrollToServices);
    const ScrollToServicesMobile = document.getElementsByClassName('ScrollToServicesMobile')[0];
    moveTo.registerTrigger(ScrollToServicesMobile);
    
    const ScrollToAboutUs = document.getElementsByClassName('ScrollToAboutUs')[0];
    moveTo.registerTrigger(ScrollToAboutUs);
    const ScrollToAboutUsMobile = document.getElementsByClassName('ScrollToAboutUsMobile')[0];
    moveTo.registerTrigger(ScrollToAboutUsMobile);
    
    const ScrollToComments = document.getElementsByClassName('ScrollToComments')[0];
    moveTo.registerTrigger(ScrollToComments);
    const ScrollToCommentsMobile = document.getElementsByClassName('ScrollToCommentsMobile')[0];
    moveTo.registerTrigger(ScrollToCommentsMobile);
    
    const ScrollToPricing = document.getElementsByClassName('ScrollToPricing')[0];
    moveTo.registerTrigger(ScrollToPricing);
    const ScrollToPricingMobile = document.getElementsByClassName('ScrollToPricingMobile')[0];
    moveTo.registerTrigger(ScrollToPricingMobile);
    
    const ScrollToProjects = document.getElementsByClassName('ScrollToProjects')[0];
    moveTo.registerTrigger(ScrollToProjects);
    const ScrollToProjectsMobile = document.getElementsByClassName('ScrollToProjectsMobile')[0];
    moveTo.registerTrigger(ScrollToProjectsMobile);
    
    const ScrollToBlog = document.getElementsByClassName('ScrollToBlog')[0];
    moveTo.registerTrigger(ScrollToBlog);
    const ScrollToBlogMobile = document.getElementsByClassName('ScrollToBlogMobile')[0];
    moveTo.registerTrigger(ScrollToBlogMobile);
    
    const ScrollToContactUs = document.getElementsByClassName('ScrollToContactUs')[0];
    moveTo.registerTrigger(ScrollToContactUs);
    const ScrollToContactUsMobile = document.getElementsByClassName('ScrollToContactUsMobile')[0];
    moveTo.registerTrigger(ScrollToContactUsMobile);
} catch (error) {
    // 
}


// Swiper js 
// for comments
try {
    // for certificate logo in footer
    var swiper = new Swiper('.swiper-certificate', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
    });
    
    var swiper = new Swiper('.swiper-comments', {
        direction: 'vertical',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.btn-next-comments',
            prevEl: '.btn-prev-comments',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });
    
    // For projects btn slider
    var swiper = new Swiper('.swiper-projects-btn', {
        slidesPerView: 'auto',
        freeMode: true,
    });
} catch (error) {
    // 
}


// Sort projects js
filterProjects("all")
function filterProjects(c) {
    var x, i;
    x = document.getElementsByClassName("filter-projects");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "projects-show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "projects-show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
    }
    element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
try {
    var btnContainer = document.getElementById("ProjectsBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn-projevts-hedaer");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("projects-btn-active");
        current[0].className = current[0].className.replace("projects-btn-active", "");
        this.className += " projects-btn-active";
        });
    }
} catch (error) {
    // 
}


// Auto height textaria
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
            
function autosize(){
    var el = this;
    setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
}