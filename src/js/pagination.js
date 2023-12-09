document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const cardsPagination = () => {
        const paginationNumbers = document.querySelector('.news-pagination')
        const paginatedList = document.querySelector('.news-cards')
        const listItems = paginatedList.querySelectorAll('.card')
        const nextButton = document.querySelector('.news-button-next')
        const prevButton = document.querySelector('.news-button-prev')

        const paginationLimit = 6
        const pageCount = Math.ceil(listItems.length / paginationLimit)
        let currentPage = 1

        const disableButton = (button) => {
            button.classList.add('disabled')
            button.setAttribute('disabled', true)
        }

        const enableButton = (button) => {
            button.classList.remove('disabled')
            button.removeAttribute('disabled')
        }

        const handlePageButtonsStatus = () => {
            if (currentPage === 1) {
                disableButton(prevButton)
            } else {
                enableButton(prevButton)
            }

            if (pageCount === currentPage) {
                disableButton(nextButton)
            } else {
                enableButton(nextButton)
            }
        }

        const handleActivePageNumber = () => {
            document.querySelectorAll('.news-pagination-item').forEach((button) => {
                button.classList.remove('active')
                const pageIndex = Number(button.getAttribute('page-index'))
                if (pageIndex == currentPage) {
                    button.classList.add('active')
                }
            })
        }

        const appendPageNumber = (index) => {
            const pageNumber = document.createElement('button')
            pageNumber.className = 'news-pagination-item'
            pageNumber.innerHTML = index
            pageNumber.setAttribute('page-index', index)
            pageNumber.setAttribute('aria-label', 'Page ' + index)
            paginationNumbers.appendChild(pageNumber)
        }

        const getPaginationNumbers = () => {
            const paginationNumbers = document.querySelector('.news-pagination')
            const prevArrow = document.querySelector('.news-button-prev')
            const nextArrow = document.querySelector('.news-button-next')

            for (let i = 1; i <= pageCount; i++) {
                const pageNumber = document.createElement('button')
                pageNumber.className = 'news-pagination-item'
                pageNumber.innerHTML = i
                pageNumber.setAttribute('page-index', i)
                pageNumber.setAttribute('aria-label', 'Page ' + i)

                paginationNumbers.insertBefore(pageNumber, nextArrow)
            }
        }

        const setCurrentPage = (pageNum) => {
            currentPage = pageNum

            handleActivePageNumber()
            handlePageButtonsStatus()

            const prevRange = (pageNum - 1) * paginationLimit
            const currRange = pageNum * paginationLimit

            listItems.forEach((item, index) => {
                item.classList.add('hidden')
                if (index >= prevRange && index < currRange) {
                    item.classList.remove('hidden')
                }
            })
        }

        window.addEventListener('load', () => {
            getPaginationNumbers()
            setCurrentPage(1)

            prevButton.addEventListener('click', () => {
                setCurrentPage(currentPage - 1)
            })

            nextButton.addEventListener('click', () => {
                setCurrentPage(currentPage + 1)
            })

            document.querySelectorAll('.news-pagination-item').forEach((button) => {
                const pageIndex = Number(button.getAttribute('page-index'))

                if (pageIndex) {
                    button.addEventListener('click', () => {
                        setCurrentPage(pageIndex)
                    })
                }
            })

            if (pageCount < 2) {
                paginationNumbers.style.display = 'none'
            }
        })
    }

    cardsPagination()
})
