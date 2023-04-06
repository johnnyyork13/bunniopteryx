const overlay = document.getElementById('overlay');
const artImg = document.getElementsByClassName('artImg');
const imageContainer = document.getElementById('imageContainer');
const imageContainerSrc = document.getElementById('imageContainerSrc');

function addArtListener() {
    for (let i = 0; i < artImg.length; i++) {
        let e = artImg[i];
        e.addEventListener('click', function(){
            addOverlay();
            changeImage(imageContainer, e.src);
        })
    }
    imageContainerSrc.addEventListener('click', function(){
        changeImage(imageContainer);
        addOverlay();
    })
}

overlay.style.visibility = 'hidden';
function addOverlay() {
    if (overlay.style.visibility === 'hidden') {
        overlay.style.visibility = 'visible';
    } else {
        overlay.style.visibility = 'hidden';
    }
}

let imageCheck = false;
function changeImage(container, src) {
    if (!imageCheck) {
        imageCheck = true;
        container.style.visibility = 'visible';
        imageContainerSrc.src = src;
    } else {
        imageCheck = false;
        container.style.visibility = 'hidden';
    }
}

addArtListener();