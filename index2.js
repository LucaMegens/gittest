var i = 0;
var images1 = [];
var time1 = 5000;

//image list
images1[0] = 'POC/POC2/image1.png';
images1[1] = 'POC/POC2/image2.png';
images1[2] = 'POC/POC2/image3.jpg';

//change image

function changeImg1(){
    document.slide.src = images1[i];

    if (i < images1.length - 1) 
    {
        i++;  
    } 

      else
    {
        i = 0;
    }
setTimeout1("changeImg1()" , time1);

}

window.onload = changeImg1;