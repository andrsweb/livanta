import { reCalculateDropdownHeight } from "./dropdown"

document.addEventListener("DOMContentLoaded", () => {
	'use strict'

	openDropdowns()
})

const openDropdowns = () => {
	const hoverLinks = document.querySelectorAll('.servicesLink')
	const techLinks = document.querySelectorAll("[class$='techLink']")
	const tabButtons = document.querySelectorAll('.techTab')
	const dropdownItems = document.querySelectorAll('.servicesDropdown')
	const hash = window.location.hash.substring(1)
	const anchors = document.querySelectorAll('.forAnchor')

	if (!hoverLinks.length && !dropdownItems.length && !tabButtons.length && !techLinks.length) return

	for (let i = 0; i < hoverLinks.length; i++) {
		hoverLinks[i].className = `hidden__menu_link anchor servicesLink${i}`
		dropdownItems[i].className = `dropdown servicesDropdown${i}`
		
		hoverLinks[i].addEventListener('click', () => {
			if (!dropdownItems[i].classList.contains('opened')) {
				dropdownItems[i].click()
			}
		})

		let id = dropdownItems[i].getAttribute('id')

		if (hash == id) {
			dropdownItems[i].click()
			reCalculateDropdownHeight(dropdownItems[i])
		}
	}
	for (let i = 0; i < techLinks.length; i++) {
		const newHash =  parseInt(hash.replace(/[a-z]/gi, ''))
		const dataId = parseInt(anchors[i].dataset.id) 

		if(newHash == dataId) {
			tabButtons[i].click()
		}

		if (!tabButtons[i].classList.contains('active')) tabButtons[i].className = `tab-button techTab${i}`

		techLinks[i].addEventListener('click', () => {
			tabButtons[i].click()
		})
	}
}