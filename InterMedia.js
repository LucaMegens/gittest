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



var IMslideIndex1 = 1;
IMshowSlides1(IMslideIndex1);

// Next/previous controls
function IMplusSlides1(IMn1) {
    IMshowSlides1(IMslideIndex1 += IMn1);
}

// Thumbnail image controls
function IMcurrentSlide1(IMn1) {
    IMshowSlides1(IMslideIndex1 = IMn1);
}

function IMshowSlides1(IMn1) {
  var i;
  var IMslides1 = document.getElementsByClassName("IMSlides1");
  var IMdots1 = document.getElementsByClassName("IMdot1");
  if (IMn1 > IMslides1.length) {IMslideIndex1 = 1}
  if (IMn1 < 1) {IMslideIndex1 = IMslides1.length}
  for (i = 0; i < IMslides1.length; i++) {
    IMslides1[i].style.display = "none";
  }
  for (i = 0; i < IMdots1.length; i++) {
    IMdots1[i].className = IMdots1[i].className.replace(" IMactive", "");
  }
  IMslides1[IMslideIndex1-1].style.display = "block";
  IMdots1[IMslideIndex1-1].className += " IMactive";
}