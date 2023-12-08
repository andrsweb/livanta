document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    showLinks()
    closeOnOutsideClick()
});

const showLinks = () => {
    const select = document.querySelector('.select')
    const selectWrapper = document.querySelector('.select-wrapper')

    if (!select || !selectWrapper) return

    select.addEventListener('click', () => {
        if (!selectWrapper.classList.contains('opened')) selectWrapper.classList.add('opened')
        else selectWrapper.classList.remove('opened')
    })
}

const closeOnOutsideClick = () => {
    document.addEventListener('click', e => {
		const target = e.target
        const selectWrapper = document.querySelector('.select-wrapper')

        if (!selectWrapper.contains(target)) {
            selectWrapper.classList.remove('opened')
        }
    })
}
