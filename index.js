var i = 0;
var images = [];
var time = 10000;

//image list
images[0] = 'Fotos/Luca Waterfall.png';
images[1] = 'Fotos/Yosemite LucaS2-03.jpg';
images[2] = 'Fotos/Yosemite LucaS2-04.jpg';
images[3] = 'Fotos/Yosemite LucaS2-05.jpg';
images[4] = 'Fotos/Yosemite LucaS2-06.jpg';
images[5] = 'Fotos/Yosemite LucaS2-07.jpg';

//change image

function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1) 
    {
        i++;  
    } 

      else
    {
        i = 0;
    }

setTimeout("changeImg()" , time);

}

window.onload = changeImg;