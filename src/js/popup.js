import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'


document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showPopup('.popup-wrapper.leadership-popup-1', '.call-lead-1', '#leadership-popup-1')
	showPopup('.popup-wrapper.leadership-popup-2', '.call-lead-2', '#leadership-popup-2')
	showPopup('.popup-wrapper.leadership-popup-3', '.call-lead-3', '#leadership-popup-3')
	showPopup('.popup-wrapper.contracts-popup', '.call-contracts', '#contracts-popup')
	showPopup('.popup-wrapper.vehicle-popup', '.call-vehicles', '#vehicle-popup')
	showPopup('.popup-wrapper.current-popup', '.call-current', '#current-popup')
	showPopup('.popup-wrapper.video-wrapper', '.play__button', '#video-popup')
} )

const showPopup = ( selector, btn, lock) => {
	const popupWrapper    = document.querySelector( selector )
	const popButtons       = document.querySelectorAll( btn )
	const closeButtons     = document.querySelectorAll('.popup-close')
	setTargetElement( document.querySelector( lock ) )

	if( ! popupWrapper ) return
	popButtons.forEach( button => {
		button.addEventListener('click', () => {
			if(!popupWrapper.classList.contains('showed')) {
				popupWrapper.classList.add('showed')
				popupWrapper.classList.remove('closed')
				disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
			}
		})
	})

	closeButtons.forEach( closeBtn => {
		closeBtn.addEventListener( 'click', () => {
				popupWrapper.classList.add('closed')
				setTimeout(() => popupWrapper.classList.remove('showed'), 350);
				setTimeout(() => popupWrapper.classList.remove('closed'), 350);
				enableBodyScroll(getTargetElement())
		} )
	})

	popupWrapper.addEventListener( 'click', e => {
		e.stopPropagation()

		const target = e.target

		if ( target.className && target.classList.contains( 'popup-wrapper' ) ) {
			popupWrapper.classList.add('closed')
				setTimeout(() => popupWrapper.classList.remove('showed'), 350);
				setTimeout(() => popupWrapper.classList.remove('closed'), 350);
				enableBodyScroll( getTargetElement() )
		}
	} )
}