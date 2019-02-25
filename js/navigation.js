// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// Collapses the navigation bar
function animateMenu(button) {
  button.classList.toggle("change");
  var x = document.getElementById("mainnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollButton").style.display = "block";
    $("#socialLinks").animate({top: "20px"}, 100);
  } else {
    document.getElementById("scrollButton").style.display = "none";
    $("#socialLinks").animate({top: "50px"}, 100);
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html, body").stop().animate({scrollTop:0});
}
