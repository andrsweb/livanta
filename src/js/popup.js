import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'


document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showPopup('.popup-wrapper.leadership-popup-1', '.call-lead-1', '#leadership-popup-1')
	showPopup('.popup-wrapper.leadership-popup-2', '.call-lead-2', '#leadership-popup-2')
	showPopup('.popup-wrapper.leadership-popup-3', '.call-lead-3', '#leadership-popup-3')
	showPopup('.popup-wrapper.leadership-popup-4', '.call-lead-4', '#leadership-popup-4')
	showPopup('.popup-wrapper.leadership-popup-5', '.call-lead-5', '#leadership-popup-5')
	showPopup('.popup-wrapper.leadership-popup-6', '.call-lead-6', '#leadership-popup-6')
	showPopup('.popup-wrapper.leadership-popup-7', '.call-lead-7', '#leadership-popup-7')
	showPopup('.popup-wrapper.leadership-popup-8', '.call-lead-8', '#leadership-popup-8')
	showPopup('.popup-wrapper.leadership-popup-9', '.call-lead-9', '#leadership-popup-9')
	showPopup('.popup-wrapper.leadership-popup-10', '.call-lead-10', '#leadership-popup-10')
	showPopup('.popup-wrapper.leadership-popup-11', '.call-lead-11', '#leadership-popup-11')
	showPopup('.popup-wrapper.leadership-popup-12', '.call-lead-12', '#leadership-popup-12')
	showPopup('.popup-wrapper.leadership-popup-13', '.call-lead-13', '#leadership-popup-13')
	showPopup('.popup-wrapper.leadership-popup-14', '.call-lead-14', '#leadership-popup-14')
	showPopup('.popup-wrapper.leadership-popup-15', '.call-lead-15', '#leadership-popup-15')
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
			const video = document.querySelector('.video')

			if(!video) return

			popupWrapper.classList.add('closed')
				setTimeout(() => popupWrapper.classList.remove('showed'), 350);
				setTimeout(() => popupWrapper.classList.remove('closed'), 350);
				video.pause()
				enableBodyScroll( getTargetElement() )
		}
	} )
}