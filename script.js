//image will start blurry and then work to clear as percentage loads

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30); //30 milliseconds

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int)
    }
    
    loadText.innerText = `${load}%`

    //map 0-100 to 0-1 for the opacity of numbers
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    //map 0-100 to 30-0 for blur
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` 
}

//from: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}