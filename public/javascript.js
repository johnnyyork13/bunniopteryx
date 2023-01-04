const leftBtn = document.getElementById('artLeft');
const viewBtn = document.getElementById('artView');
const rightBtn = document.getElementById('artRight');
const btnList = document.getElementsByClassName('navButton');

const artArray = document.getElementsByClassName('art');

let numSlide = 1;
let left = false;
let right = false;

leftBtn.addEventListener('click', function(){
    left = true;

    changeSlide();
})

rightBtn.addEventListener('click', function(){
    left = false;

    changeSlide();
})

function changeSlide()
{
    console.log(left, numSlide);
    if (left && numSlide > 1)  {
        console.log('one')
        numSlide -= 1;
    } else if (left && numSlide == 1) {
        console.log('two')
        numSlide = 8;
    } else if (!left && numSlide < 8) {
        console.log('three')
        numSlide += 1;
    } else if (!left && numSlide == 8) {
        console.log('four')
        numSlide = 1;
    }

    for (i = 0; i < artArray.length; i++) {
        let e = artArray[i];
        if (e.id === `art${numSlide}`)
        {
            console.log(e.id, numSlide);
            e.style.visibility = 'visible';
            e.style.opacity = '1';
        } else {
            e.style.visibility = 'hidden';
            e.style.opacity = '0';
        }
    }
}

