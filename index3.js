// Pakt alle plaatjes in de 'slide' div en maakt er een array van de img objecten.
var slide = document.getElementById("Slideshow");
var arr = Array.prototype.slice.call(slide.children);

//zorgt ervoor dat css de array kan beinvloeden
arr.map(function(imageObj)
{
  imageObj.classList.add("Slideshow-img");
}
);

//Laat de eerste slide zien
arr[0].classList.add("show");

//Zet de waardes voor de timing van de slideshow
var CurrentSlide = 1;
var SlideLength = slide.children.length;
var PrevSlide = 0;

//interval function
setInterval(function() 
{
  if (CurrentSlide >= SlideLength)
    CurrentSlide = 0;

  arr[PrevSlide].classList.remove("show");
  arr[CurrentSlide].classList.add("show");

  PrevSlide = CurrentSlide;
  CurrentSlide++;

}, 3000)