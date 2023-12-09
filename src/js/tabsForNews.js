document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    synchronizeTabs()
    changeSelectTextOnNewsClick()
})

function synchronizeTabs() {
    const tabsHeaders = document.querySelectorAll('.news-button, .filter.news-button'),
        tabsContents = document.querySelectorAll('.news-cards'),
        paginationButtons = document.querySelectorAll('.news-pagination-item'),
        prevBtn = document.querySelector('.news-button-prev'),
        nextBtn = document.querySelector('.news-button-next'),
        select = document.querySelector('.select')

    if (!tabsHeaders.length || !tabsContents.length || !paginationButtons.length || !prevBtn || !nextBtn || !select) return

    const activateTab = (id) => {
        tabsHeaders.forEach(tabsItem => tabsItem.classList.remove('active'))
        paginationButtons.forEach(paginationButton => paginationButton.classList.remove('active'))

        const selectedTab = document.querySelector(`[data-id="${id}"].news-button, .filter[data-id="${id}"].news-button`)
        const selectedPaginationButton = document.querySelector(`.news-pagination-item[data-id="${id}"]`)

        if (selectedTab && selectedPaginationButton) {
            selectedTab.classList.add('active')
            selectedPaginationButton.classList.add('active')

            tabsContents.forEach(content => content.classList.remove('active'))
            document.querySelector(`.news-cards[data-id="${id}"]`).classList.add('active')
        }

        const newText = selectedTab.textContent
        const selectArrHTML = select.querySelector('.select-arr').outerHTML
        select.innerHTML = newText + selectArrHTML
        select.parentElement.classList.remove('opened')
    }

    tabsHeaders.forEach((tab) => {
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
        const currentActiveIndex = Array.from(tabsHeaders).findIndex(tab => tab.classList.contains('active'))
        const prevIndex = Math.max(currentActiveIndex - 1, 0)
        const prevId = tabsHeaders[prevIndex].dataset.id

        activateTab(prevId)
    })

    nextBtn.addEventListener('click', () => {
        const currentActiveIndex = Array.from(tabsHeaders).findIndex(tab => tab.classList.contains('active'))
        const nextIndex = Math.min(currentActiveIndex + 1, tabsHeaders.length - 1)
        const nextId = tabsHeaders[nextIndex].dataset.id

        activateTab(nextId)
    })

    window.addEventListener('resize', () => {
        activateTab('1')
    })
}

const changeSelectTextOnNewsClick = () => {
    const newsButtons = document.querySelectorAll('.news-button')
    const select = document.querySelector('.select')

    if (!newsButtons || !select) return

    newsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newText = button.textContent
            const selectArrHTML = select.querySelector('.select-arr').outerHTML
            select.innerHTML = newText + selectArrHTML
            select.parentElement.classList.remove('opened')
        })
    })
}
