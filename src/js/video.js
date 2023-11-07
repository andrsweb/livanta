document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	playVideo()
})

const playVideo = () => {
	
	const playButton = document.querySelector('.play__button')
	const video = document.querySelector('.video')

	if(!playButton || !video) return

	playButton.addEventListener('click', () => {
		// playButton.classList.add('played')
		video.play()
		video.muted = false
		video.controls = true
	})
}

