document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    changeNewsTab('.news-button', '.news-cards', '.news-pagination-item', '.news-button-prev', '.news-button-next')
    changeNewsTab('.select-button', '.news-cards', '.news-pagination-item', '.news-button-prev', '.news-button-next')
})

const changeNewsTab = (button, contents, paginationItems, prevButton, nextButton) => {
    const tabsHeaders = document.querySelectorAll(button),
        tabsContents = document.querySelectorAll(contents),
        paginationButtons = document.querySelectorAll(paginationItems),
        prevBtn = document.querySelector(prevButton),
        nextBtn = document.querySelector(nextButton)

    if (!tabsHeaders.length || !tabsContents.length || !paginationButtons.length || !prevBtn || !nextBtn) return

    const activateTab = (id) => {
        tabsHeaders.forEach(tabsItem => tabsItem.classList.remove('active'))
        paginationButtons.forEach(paginationButton => paginationButton.classList.remove('active'))

        const selectedTab = document.querySelector(`${button}[data-id="${id}"]`)
        const selectedPaginationButton = document.querySelector(`${paginationItems}[data-id="${id}"]`)

        if (selectedTab && selectedPaginationButton) {
            selectedTab.classList.add('active')
            selectedPaginationButton.classList.add('active')

            tabsContents.forEach(content => content.classList.remove('active'));
            document.querySelector(`${contents}[data-id="${id}"]`).classList.add('active')
        }
    }

    tabsHeaders.forEach((tab, i, tabs) => {
        tab.addEventListener('click', () => {
            const id = tab.dataset.id
            if (!id || tab.classList.contains('active')) return

            activateTab(id)
        })
    })

    paginationButtons.forEach((paginationButton) => {
        paginationButton.addEventListener('click', () => {
            const id = paginationButton.dataset.id
            if (!id || paginationButton.classList.contains('active')) return

            activateTab(id)
        })
    })

	prevBtn.addEventListener('click', () => {
		const currentlyActiveTab = document.querySelector(`${button}.active`)
		const currentActiveIndex = Array.from(tabsHeaders).indexOf(currentlyActiveTab)
		const prevIndex = Math.max(currentActiveIndex - 1, 0)
	
		const prevId = tabsHeaders[prevIndex].dataset.id
		activateTab(prevId)
	});
	
	nextBtn.addEventListener('click', () => {
		const currentlyActiveTab = document.querySelector(`${button}.active`)
		const currentActiveIndex = Array.from(tabsHeaders).indexOf(currentlyActiveTab)
		const nextIndex = Math.min(currentActiveIndex + 1, tabsHeaders.length - 1)
	
		const nextId = tabsHeaders[nextIndex].dataset.id
		activateTab(nextId)
	})

	window.addEventListener('resize', () => {
		activateTab('1')
	})
}
