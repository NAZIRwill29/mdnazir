function nav(x) {
    x.classList.toggle("change");
    $(".navigation").toggleClass("active");
}

//for faq button
var btnFaqs = document.querySelectorAll(".btn-faq")
btnFaqs.forEach(btnFaq => {
    btnFaq.addEventListener("click", function (e) {
        this.classList.toggle("transform");
        document.querySelector("#faq" + e.target.id).classList.toggle("active");
    });
});

///for slideshow////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
///////////////////////////////////////////////////////

//date at copyright
let year = new Date().getFullYear()
document.querySelector("#date").innerHTML = year;

//function animation when scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  reveals.forEach(reveal =>{
      var windowHeight = window.innerHeight;
      var elementTop = reveal.getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < (windowHeight - elementVisible)) {
          reveal.classList.add("active");
      } else {
          reveal.classList.remove("active");
      }
  });
};

window.addEventListener("scroll", reveal);