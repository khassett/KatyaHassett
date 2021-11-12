let isMobile = false;
isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

$(window).on('scroll', function () {  
  if ( !isMobile ) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "0px 80px";
    } else {
      document.getElementById("navbar").style.padding = "0px 50px";
    }
  } 
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener('submit', (event) => {
  
});