//alert("Get ready to be amazed!");

console.log("Welcome to my Portfolio Site");

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    var isMobileBreakpoint = window.innerWidth <= 641
    
    if (x.className === 'navtoggle' && isMobileBreakpoint) {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
}