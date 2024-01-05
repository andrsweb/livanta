import Swiper from 'swiper';
import { Navigation, Scrollbar, Thumbs } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperInit('.latest-news-slider', '.latest__news_next', '.latest__news_prev')
	swiperInit('.more-like-swiper', '.more-like_next', '.more-like_prev')
	swiperInitWithBar('.leadership-swiper', '.leadership_next', '.leadership_prev')
	customSlider()
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

		speed: 500,

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

		speed: 500,

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

const customSlider = () => {
	const swiper = new Swiper('.slider-info', {
		slidesPerView: 1,
		spaceBetween: 32,
		modules: [Navigation],

		navigation: {
			nextEl: '.certifications_next',
			prevEl: '.certifications_prev',
		},

		grabCursor: true
	})

	if (!swiper) return

	const certificationItems = document.querySelectorAll('.certifications__col_item')

	if (!certificationItems.length) return

	certificationItems.forEach((item) => {
		item.addEventListener('click', () => {

			certificationItems.forEach((activeItem) => {
				activeItem.classList.remove('active')
			})

			item.classList.add('active')

			const dataIndex = item.getAttribute('data-index')
			swiper.slideTo(dataIndex)
		})
	})

	swiper.on('slideChange', () => {
		const activeIndex = swiper.activeIndex

		certificationItems.forEach((item, i) => {
			if (i === activeIndex) item.classList.add('active')
			else item.classList.remove('active')
		})
	})
}