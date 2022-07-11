let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let body = document.body;
menuBtn.addEventListener('click', function() {
	menu.classList.toggle('active');
    if(body.style.overflow == 'hidden')
		body.style.overflow = 'auto';
	else body.style.overflow = 'hidden';
})

let slideIndex = 1;
let npBtn = document.querySelectorAll('.next-previous-btn > p');

showSlides(slideIndex);
function nextSlide() {
    showSlides(slideIndex += 1);
}
function previousSlide() {
    showSlides(slideIndex -= 1);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
	let p = npBtn[slideIndex - 1].style.display = 'auto';
}

let leftIndex = 1, rightIndex = 2;
showSlides_1();

function nextSlide_1() {
	leftIndex = rightIndex;
	rightIndex += 1;
    showSlides_1();
}
function previousSlide_1() {
	rightIndex = leftIndex;
	leftIndex -= 1;
    showSlides_1();
}

function showSlides_1() {
    let slides = document.getElementsByClassName("tm-block");
	for (let slide of slides) {
		slide.style.display = "none";
	}
	if (rightIndex > slides.length)
	{
		rightIndex = 1;
	}
	else if (leftIndex < 1)
	{
		leftIndex = slides.length;
	}
	slides[leftIndex - 1].style.display = "flex";
	slides[rightIndex - 1].style.display = "flex";
}