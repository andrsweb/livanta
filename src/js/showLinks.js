document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    showLinks()
    closeOnOutsideClick()
})

const showLinks = () => {
    const select = document.querySelector('.select')
    const selectWrapper = document.querySelector('.select-wrapper')

    if (!select || !selectWrapper) return

    select.addEventListener('click', () => {
        selectWrapper.classList.toggle('opened')
    })
}

const closeOnOutsideClick = () => {
    document.addEventListener('click', e => {
        const selectWrapper = document.querySelector('.select-wrapper')

		if(!selectWrapper) return

        if (!selectWrapper.contains(e.target)) {
            selectWrapper.classList.remove('opened')
        }
    })
}