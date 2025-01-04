import { burgerOpen, burgerClose } from './js-components/burger';

burgerOpen();
burgerClose();

import Splide from '@splidejs/splide';

new Splide('.splide', {
	type: 'loop',
}).mount();

const a = document.querySelector('.splide__pagination__page').textContent;
console.log(a);
