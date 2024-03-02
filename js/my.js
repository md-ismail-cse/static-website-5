	 // for sticky menu
 
 /*window.onscroll = function() {myFunction()};

var navbar = document.getElementById("main_menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}*/



// Loder
	$(window).on('load',function(){
		$('.page-loader').fadeOut();
	});



//top up
window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("scrollup_btn").style.display = "block";
	  } else {
		document.getElementById("scrollup_btn").style.display = "none";
	  }
	}
// Wow Js

		wow = new WOW(
			  {
				animateClass: 'animated',
				offset:       100,
				callback:     function(box) {
				  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
				}
			  }
			);
			wow.init();
			document.getElementById('moar').onclick = function() {
			  var section = document.createElement('section');
			  section.className = 'section--purple wow fadeInDown';
			  this.parentNode.insertBefore(section, this);
			};


