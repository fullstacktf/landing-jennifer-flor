import Typed from 'typed.js';

const locations = document.querySelector('#locations');

new Typed(locations, {
	strings: ['Santa Cruz de Tenerife', 'La Laguna', 'Adeje', 'Los Cristianos', 'El Puerto de la Cruz', 'Las Américas', 'La Orotava', 'Tegueste', 'Icod de los Vinos'],
	typeSpeed: 60,
	loop: true,
	backDelay: 2e3,
});
