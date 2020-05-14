// Pakt alle plaatjes in de 'slide' div en maakt er een array van de img objecten.
var slide = document.getElementById("LandingPage");
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
var currentslide = 1;
var slidelength = slide.children.length;
var prevslide = 0;

//interval function
setInterval(function() 
{
  if (currentslide >= slidelength)
    currentslide = 0;

  arr[prevslide].classList.remove("show");
  arr[currentslide].classList.add("show");

  prevslide = currentslide;
  currentslide++;

}, 10000)