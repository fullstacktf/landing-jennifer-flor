import Typed from 'typed.js';

const locations = document.querySelector('#locations');

new Typed(locations, {
	strings: ['Santa Cruz de Tenerife', 'La Laguna', 'Adeje', 'Los Cristianos', 'El Puerto de la Cruz', 'Las Américas', 'La Orotava', 'Tegueste', 'Icod de los Vinos'],
	typeSpeed: 60,
	loop: true,
	backDelay: 2e3,
});

const reviewClients = Array.from(document.querySelectorAll('.review'));
const allButtons = Array.from(document.querySelectorAll('.reviews-control > .button'));

allButtons.forEach((item) => {
	item.addEventListener('click', nextReview);
});

function nextReview(ev) {
	allButtons.forEach((item, index) => {
		item.className = 'button';
		reviewClients[index].className = 'review';
	});
	ev.target.className = 'button selected';
	reviewClients[ev.target.id].className = 'review active';
}
