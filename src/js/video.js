document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	playVideo()
})

const playVideo = () => {
	const playButton = document.querySelector('.play__button')
	const video = document.querySelector('.video')
	const videoThumbs = document.querySelector('.video__thumbs')

	if(!playButton && !video && !videoThumbs) return

	playButton.addEventListener('click', () => {
		videoThumbs.classList.add('removed')
		setTimeout(() => videoThumbs.classList.add('closed'), 300);
		playButton.classList.add('played')
		video.play()
		video.muted = false
		setTimeout(() => video.classList.add('playing'), 300);
		video.controls = true
	})
}