var nav = document.getElementsByTagName('nav-bar')[0];
var mainNav = document.querySelectorAll('.main-nav a')

window.onscroll = function(){
  if (window.pageYOffset > 290) {
    nav.style.background = "#bba637";
    nav.style.opacity = "0.8";
    mainNav.forEach(atext => {
      atext.style.color = "black";
    })
  }
  else{
    nav.style.background = "white";
    mainNav.forEach(atext => {
      atext.style.color = "#bba637";
    })
  }
}
