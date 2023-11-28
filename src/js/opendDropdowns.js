import { reCalculateDropdownHeight } from "./dropdown"

document.addEventListener("DOMContentLoaded", () => {
    'use strict'

    openDropdowns()
})

const setupHoverDropdowns = (hoverLinks, dropdownItems, hash) => {
    for (let i = 0; i < hoverLinks.length; i++) {
        const link = hoverLinks[i]
        const dropdown = dropdownItems[i]

        link.className = `hidden__menu_link anchor servicesLink${i}`
        dropdown.className = `dropdown servicesDropdown${i}`

        link.addEventListener('click', () => {
            if (!dropdown.classList.contains('opened')) {
                dropdown.click()
            }
        });

        const id = dropdown.getAttribute('id')

        if (hash === id) {
            dropdown.click()
            reCalculateDropdownHeight(dropdown)
        }
    }
}

const setupTechTabs = (techLinks, tabButtons, anchors, hash) => {
    for (let i = 0; i < techLinks.length; i++) {
        const newHash = parseInt(hash.replace(/[a-z]/gi, ''))
        const dataId = parseInt(anchors[i].dataset.id)

        if (newHash === dataId) {
            tabButtons[i].click()
        }

        const tabButton = tabButtons[i]
        const techLink = techLinks[i]

        if (!tabButton.classList.contains('active')) {
            tabButton.className = `tab-button techTab${i}`
        }

        techLink.addEventListener('click', () => {
            tabButton.click();
        })
    }
}

const openDropdowns = () => {
    const hoverLinks = document.querySelectorAll('.servicesLink')
    const techLinks = document.querySelectorAll("[class$='techLink']")
    const tabButtons = document.querySelectorAll('.techTab')
    const dropdownItems = document.querySelectorAll('.servicesDropdown')
    const hash = window.location.hash.substring(1)
    const anchors = document.querySelectorAll('.forAnchor')

    if (!hoverLinks.length && !dropdownItems.length && !tabButtons.length && !techLinks.length) {
        return
    }

    setupHoverDropdowns(hoverLinks, dropdownItems, hash)
    setupTechTabs(techLinks, tabButtons, anchors, hash)
};
