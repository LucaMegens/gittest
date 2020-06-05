var IMslideIndex = 1;
IMshowSlides(IMslideIndex);

// Next/previous controls
function IMplusSlides(IMn) {
    IMshowSlides(IMslideIndex += IMn);
}

// Thumbnail image controls
function IMcurrentSlide(IMn) {
    IMshowSlides(IMslideIndex = IMn);
}

function IMshowSlides(IMn) {
  var i;
  var IMslides = document.getElementsByClassName("IMSlides");
  var IMdots = document.getElementsByClassName("IMdot");
  if (IMn > IMslides.length) {IMslideIndex = 1}
  if (IMn < 1) {IMslideIndex = IMslides.length}
  for (i = 0; i < IMslides.length; i++) {
    IMslides[i].style.display = "none";
  }
  for (i = 0; i < IMdots.length; i++) {
    IMdots[i].className = IMdots[i].className.replace(" IMactive", "");
  }
  IMslides[IMslideIndex-1].style.display = "block";
  IMdots[IMslideIndex-1].className += " IMactive";
}