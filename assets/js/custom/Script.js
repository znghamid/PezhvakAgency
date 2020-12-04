// Preloader page
function loader(){
    document.getElementById('preloader').classList.add('d-none');
}


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