var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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


function darkMode(){
     let headerThree = document.querySelectorAll("h3");
     if(document.body.className == "darkBody"){
         document.body.classList.remove("darkBody");
         for(let i=0; i<headerThree.length; i++){
            headerThree[i].classList.remove("darkH3");
        }
     }else{
        document.body.classList.add("darkBody");
        for(let i=0; i<headerThree.length; i++){
            headerThree[i].classList.add("darkH3");
        }
     }
 }