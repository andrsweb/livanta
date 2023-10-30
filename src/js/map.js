import { isInScope } from "./common/global"

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showMap()
} )

const showMap = () => {

	const map = document.querySelector( '.iframe-map' )

	if( ! map ) return

	document.addEventListener( 'scroll', () => {
			if ( isInScope( '.map', window.scrollY ) ) {
				if( ! map.classList.contains( 'loaded' ) ) {
					map.src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1378.661445558876!2d-76.79599108157916!3d39.12945411608611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7e73b8b944e71%3A0xb44ee34d2197dfb3!2s10830%20Guilford%20Rd%20Ste%20312%2C%20Annapolis%20Junction%2C%20MD%2020701%2C%20USA!5e0!3m2!1sen!2sth!4v1698597050284!5m2!1sen!2sth'
					map.classList.add( 'loaded' )
				}
			}
		}
	)
}