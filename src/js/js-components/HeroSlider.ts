import Splide from '@splidejs/splide';
import { Intersection } from '@splidejs/splide-extension-intersection';

export const heroSlider = () => {
	new Splide('.splide', {
		type: 'loop',
		autoplay: 'pause',
		intersection: {
			inView: {
				autoplay: true,
			},
		},
	}).mount({ Intersection });
};
