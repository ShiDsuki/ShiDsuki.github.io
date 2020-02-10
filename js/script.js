var $btnTop = $(".btn-top")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 20){
		$btnTop.fadeIn();
	}else{
		$btnTop.fadeOut();	
	}
});

$btnTop.on("click", function(){
	$("html,body").animate({scrollTop:0}, 600)
})

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}