import Typed from 'typed.js';
import AOS from 'aos';
AOS.init({
	once: true,
});

const locations = document.querySelector('#locations');

new Typed(locations, {
	strings: ['Santa Cruz de Tenerife', 'La Laguna', 'Adeje', 'Los Cristianos', 'El Puerto de la Cruz', 'Las Américas', 'La Orotava', 'Tegueste', 'Icod de los Vinos'],
	typeSpeed: 60,
	loop: true,
	backDelay: 2e3,
});

const reviewClients = Array.from(document.querySelectorAll('.review'));
const allButtons = Array.from(document.querySelectorAll('.reviews-control > .button'));
let idReview = 0;

allButtons.forEach((item) => {
	item.addEventListener('click', clickNextReview);
});

setInterval(() => {
	nextReview(idReview);
	idReview === reviewClients.length - 1 ? (idReview = 0) : (idReview += 1);
}, 5000);

function nextReview(n) {
	reviewClients.forEach((item, index) => {
		if (index != n) {
			item.classList.remove('active');
			allButtons[index].classList.remove('selected');
		}
	});
	reviewClients[n].classList.add('active');
	allButtons[n].classList.add('selected');
}

function clickNextReview(ev) {
	idReview = parseInt(ev.target.id);
	nextReview(idReview);
}
