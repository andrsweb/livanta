document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	playVideo()
})

const playVideo = () => {
	const playButton = document.querySelector('.play__button')
	const video = document.querySelector('.video')
	const closeBtn = document.querySelector('.video-popup__wrapper .popup-close')

	if(!playButton || !video) return

	playButton.addEventListener('click', () => {
		video.play()
		video.muted = false
		video.controls = true
	})

	closeBtn.addEventListener('click', () => {
		video.pause()
	})
}

