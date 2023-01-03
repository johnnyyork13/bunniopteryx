const leftBtn = document.getElementById('artLeft');
const viewBtn = document.getElementById('artView');
const rightBtn = document.getElementById('artRight');
const btnList = document.getElementsByClassName('navButton');
const currentSlide = document.getElementById('art');


let slideNum = 1;


leftBtn.addEventListener('click', function(){
    if (slideNum > 1)
    {
        slideNum -= 1;
    } else {
        slideNum = 8;
    }

    updateSlide();
})

rightBtn.addEventListener('click', function(){
    if (slideNum < 8)
    {
        slideNum += 1;
    } else {
        slideNum = 1;
    }

    updateSlide();
})

function updateSlide()
{
    currentSlide.src = `images/artwork${slideNum}.jpg`;
}