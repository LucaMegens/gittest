var i = 0;
var images = [];
var time = 5000;

//image list
images[0] = 'POC/POC2/image1.png';
images[1] = 'POC/POC2/image2.png';
images[2] = 'POC/POC2/image3.png';
images[3] = 'POC/POC2/image4.jpg';

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