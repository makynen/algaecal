/* Display Phone + Speak to Specialists */
const acphone = '1-800-820-0184'; 

document.getElementById("ac-call").innerHTML = `
<p class="ac-tap-to-talk">Tap to Talk <a href="tel:+18008200184"><span class="ac-phone">${acphone}</span></a></p>
<p><i class="fa fa-phone" aria-hidden="true"></i> Speak to Our Bone Health Specialists</p>
`

/* Hide Packages + Wistia Fallback */
$(document).ready(function() {
    $("#ac-packages").hide(); 
document.getElementById('cecdwaq3dz').addEventListener("timeupdate", 
function() {
    // Show packages if time is > 2:13...
    if(this.currentTime > 133) {
$("#ac-packages").show();
    }
    else {
        // Unlike the Wistia script we'll re-hide the packages if time returns to < 2:13...
        $("#ac-packages").hide();
    }
});
});

/* Back to Top */
$(document).ready(function(){
    $(window).scroll(function () {
           if ($(this).scrollTop() > 50) {
               $('#back-to-top').fadeIn();
           } else {
               $('#back-to-top').fadeOut();
           }
       });
       // Scroll document (body) to 0px on click...
       $('#back-to-top').click(function () {
           $('#back-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
       
       $('#back-to-top').tooltip('show');

});