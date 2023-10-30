import Swiper from 'swiper';
import { Navigation, Scrollbar, Thumbs } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperInit('.latest-news-slider', '.latest__news_next', '.latest__news_prev')
	swiperInit('.more-like-swiper', '.more-like_next', '.more-like_prev')
	swiperInitWithBar('.leadership-swiper', '.leadership_next', '.leadership_prev')
})

const swiperInit = (selector, next, prev) => {
	const swiper = new Swiper(selector, {
		spaceBetween: 20,
		modules: [Navigation],
		loop: true,

		navigation: {
			nextEl: next,
			prevEl: prev,
		},

		speed: 2000,

		breakpoints: {
			320: {
				slidesPerView: 1,
			},

			620: {
				slidesPerView: 2,
			},

			992: {
				slidesPerView: 3
			}
		},
	})

	if (!swiper) return
}

const swiperInitWithBar = (selector, next, prev) => {
	const swiper = new Swiper(selector, {
		spaceBetween: 20,

		modules: [Navigation, Scrollbar],

		navigation: {
			nextEl: next,
			prevEl: prev,
		},

		scrollbar: {
			el: '.swiper-scrollbar',
		},

		speed: 2000,

		breakpoints: {
			320: {
				slidesPerView: 1,
			},

			768: {
				slidesPerView: 2,
			},

			992: {
				slidesPerView: 'auto',
				spaceBetween: 32
			}
		},
	})

	if (!swiper) return
}

const sliderThumbs = new Swiper('.slider-thumbs .swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	modules: [Thumbs],
	freeMode: true,

	breakpoints: {
		320: {
			direction: 'horizontal',
		},

		992: {
			direction: 'vertical',
		}
	},
});
const sliderImages = new Swiper('.slider-info .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 32,
	mousewheel: true,
	modules: [Thumbs, Navigation],

	navigation: {
		nextEl: '.certifications_next',
		prevEl: '.certifications_prev',
	},

	grabCursor: true,
	thumbs: {
		swiper: sliderThumbs
	}
});

