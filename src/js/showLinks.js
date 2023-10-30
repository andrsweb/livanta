document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showLinks()
})

const showLinks = () => {
	const select = document.querySelector('.select')
	const selectWrapper = document.querySelector('.select-wrapper')

	if(!select && !selectWrapper) return

	select.addEventListener('click', () => {
		if(!selectWrapper.classList.contains('opened')) selectWrapper.classList.add('opened')
		else selectWrapper.classList.remove('opened')
	})

}