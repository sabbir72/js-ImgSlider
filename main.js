var sliderItem= document.querySelectorAll('.slider-item');
var sliderLeft = document.querySelector(".slide-left");
var sliderRight = document.querySelector(".slide-right");

var current=0;
function reset(){
    for (var i = 0; i < sliderItem.length; i++) {
       sliderItem[i].style.display='none';
        
    }
}



function startSlider() {
    reset();
    sliderItem[0].style.display='block';
}
startSlider();


function leftSlide() {
    reset();
    sliderItem[current-1].style.display='block';
    current--;
}
function rightSlide() {
    reset();
    sliderItem[current+1].style.display='block';
    current++;
}

//event listener
sliderLeft.addEventListener('click',function () {
    if (current===0) {
        current=sliderItem.length;
    }
    leftSlide();
});
//event listener
sliderRight.addEventListener('click',function () {
    if (current === sliderItem.length-1) {
      current = -1;
    }
    rightSlide();
});

