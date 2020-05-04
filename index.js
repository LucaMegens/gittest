var i = 0;
var images = [];
var time = 5000;

//image list
images[0] = 'Fotos/Luca Waterfall.png';
images[1] = 'Fotos/GlenCanyon.png';
images[2] = 'Fotos/Kano.png';

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