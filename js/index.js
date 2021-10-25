$(window).on('scroll', function () {   
  // let navbar = $(".nav");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 50px 20px 50px";
    document.getElementById("logo").style.height = "80px";
  } else {
    document.getElementById("navbar").style.padding = "0px 30px 40px 30px";
    document.getElementById("logo").style.height = "100px";
  }
});