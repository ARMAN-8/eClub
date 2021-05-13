// Get started!

'use strict';

const btn = document.querySelector('.button'),
	  card = document.querySelector('.yellowCard');

btn.addEventListener('click', () => {
	// card.classList.remove('.hidden');
	console.log('clicked');
	card.classList.add('.bg-green-400');
});

// accordion

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

// Scroll
/*function scroll(price, benefits, faq){
	let ele = document.getElementById(price);
	let ele1 = document.getElementById(benefits);
	let ele2 = document.getElementById(faq);
	window.scrollTo(ele.offsetLeft,ele.offsetTop);
	ele.style.transitionDuration = 'bottom 1s ease-out 0.5s';
}*/
// scroll #2

function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth',
	});
}

const price = document.querySelector('.price');
const priceDiv = document.querySelector('.priceDiv');

const benefits = document.querySelector('.benefits');
const benefitsDiv = document.querySelector('.benefitsDiv');

const faq = document.querySelector('.faq');
const faqDiv = document.querySelector('.faqDiv');

price.addEventListener('click', () => {
	scrollTo(priceDiv);
});

benefits.addEventListener('click', () => {
	scrollTo(benefitsDiv);
});

faq.addEventListener('click', () => {
	scrollTo(faqDiv);
});
