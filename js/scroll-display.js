let mybutton = document.getElementById("btn-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}