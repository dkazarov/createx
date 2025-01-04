import { burgerOpen, burgerClose } from './js-components/burger';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.hero-slider', {
	modules: [Navigation, Pagination, ],

  loop: true,

	pagination: {
		el: '.swiper-pagination',
    clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

burgerOpen();
burgerClose();
