let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function slider() {

    let prevItem = container.querySelector('.list .item.active'); //item active selection
    prevItem.classList.remove('active');

    let prevDot = indicator.querySelector('ul li.active');
    prevDot.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerHTML = '0' + (active + 1);

}

nextButton.onclick = () => { //arrow functions allow us to write shorter function syntax

    active = active + 1 > lastPosition ? 0 : active + 1; 
    slider(); //function that selects the active items and makes the exchange 
    items[active].classList.add('active');
} 

prevButton.onclick = () => {

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    slider(); //function that selects the active items and makes the exchange
    items[active].classList.add('active');

}