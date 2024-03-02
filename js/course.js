$(document).ready(function(){
	$("#course_item_btn_1").click(function(){
		$("#course_item_1").slideDown(500);
		$("#course_item_2").slideUp(500);
		$("#course_item_3").slideUp(500);
		$("#course_item_4").slideUp(500);
		$("#course_item_5").slideUp(500);
		$("#course_item_6").slideUp(500);
	});
	$("#course_item_btn_2").click(function(){
		$("#course_item_1").slideUp(500);
		$("#course_item_2").slideDown(500);
		$("#course_item_3").slideUp(500);
		$("#course_item_4").slideUp(500);
		$("#course_item_5").slideUp(500);
		$("#course_item_6").slideUp(500);
	});
	$("#course_item_btn_3").click(function(){
		$("#course_item_1").slideUp(500);
		$("#course_item_2").slideUp(500);
		$("#course_item_3").slideDown(500);
		$("#course_item_4").slideUp(500);
		$("#course_item_5").slideUp(500);
		$("#course_item_6").slideUp(500);
	});
	$("#course_item_btn_4").click(function(){
		$("#course_item_1").slideUp(500);
		$("#course_item_2").slideUp(500);
		$("#course_item_3").slideUp(500);
		$("#course_item_4").slideDown(500);
		$("#course_item_5").slideUp(500);
		$("#course_item_6").slideUp(500);
	});
	$("#course_item_btn_5").click(function(){
		$("#course_item_1").slideUp(500);
		$("#course_item_2").slideUp(500);
		$("#course_item_3").slideUp(500);
		$("#course_item_4").slideUp(500);
		$("#course_item_5").slideDown(500);
		$("#course_item_6").slideUp(500);
	});
	$("#course_item_btn_6").click(function(){
		$("#course_item_1").slideUp(500);
		$("#course_item_2").slideUp(500);
		$("#course_item_3").slideUp(500);
		$("#course_item_4").slideUp(500);
		$("#course_item_5").slideUp(500);
		$("#course_item_6").slideDown(500);
	});
});





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("course_menu");
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
