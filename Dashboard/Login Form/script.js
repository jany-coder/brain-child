


 const togglePassword = document.querySelector("#toggle-password");
 const password = document.querySelector("#password");

 togglePassword.addEventListener("click", function () {
     // toggle the type attribute
     const type = password.getAttribute("type") === "password" ? "text" : "password";
     password.setAttribute("type", type);
     
     // toggle the icon
     this.classList.toggle("fa-eye");
     this.classList.toggle("fa-eye-slash");
 });

 // prevent form submit
 const form = document.querySelector("form");
 form.addEventListener('submit', function (e) {
     e.preventDefault();
 });



//  Slide show

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}