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
var currentSlide = 1;
var slideLength = slide.children.length;
var prevSlide = 0;

//interval function
setInterval(function() 
{
  if (currentSlide >= slideLength)
    currentSlide = 0;

  arr[prevSlide].classList.remove("show");
  arr[currentSlide].classList.add("show");

  prevSlide = currentSlide;
  currentSlide++;

}, 5000)