import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	headerScroll()
	toggleBurgerMenu()
} )

const toggleBurgerMenu = () => {
	const headerInner        = document.querySelector('.header__inner')
	const burgerButton       = document.querySelector('.burger__button')
	const menuLinks          = document.querySelectorAll('.hidden__menu_link')
	const header             = document.querySelector('.header')
	setTargetElement(document.querySelector('#menu-lock'))

	if(!headerInner && !burgerButton && !header ) return

	burgerButton.addEventListener('click', () => {
		if(window.scrollY === 0) {
			header.classList.toggle('clicked')
		}
		
		if (!headerInner.classList.contains('opened')) {
			headerInner.classList.add('opened')
			burgerButton.classList.add('opened')
			headerInner.classList.remove('closed')
			disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
		} else {
			headerInner.classList.add('closed')
			setTimeout(() => headerInner.classList.remove('opened'), 350);
			burgerButton.classList.remove('opened')
			setTimeout(() => headerInner.classList.remove('closed'), 350);
			enableBodyScroll(getTargetElement())
		}
	})

	if(window.scrollY > 0) {
		header.classList.add('scrolled')
	}

	window.addEventListener('resize', () => {
		if(window.innerWidth >= 992) {
			if(headerInner.classList.contains('opened'))
			headerInner.classList.remove('opened')
			burgerButton.classList.remove('opened')
			enableBodyScroll(getTargetElement())
		}
	})

	if(window.innerWidth < 992) {
		menuLinks.forEach( link => {
		
			link.addEventListener('click', () => {
				headerInner.classList.add('closed')
				setTimeout(() => headerInner.classList.remove('opened'), 350);
				burgerButton.classList.remove('opened')
				setTimeout(() => headerInner.classList.remove('closed'), 350);
				enableBodyScroll(getTargetElement())
			})
		})	
	}
}

const headerScroll = () => {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY
        const header = document.querySelector( '.header' )

		if( ! header ) return

        if ( scrollTop > 0 ) {
            if ( ! header.classList.contains( 'scrolled' ) )
                header.classList.add( 'scrolled' )
		}   else {
            header.classList.remove( 'scrolled' )
        }
    })
}