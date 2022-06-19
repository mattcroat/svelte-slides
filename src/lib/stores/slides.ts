import { writable } from 'svelte/store'
import { browser } from '$app/env'

let currentSlideIndex = browser ? +window.location.hash.substring(1) : 1

export const currentSlide = writable<number>(currentSlideIndex)
export const slideDirection = writable<'right' | 'left'>()

function updateCurrentSlide() {
  if (!browser) return
  window.location.hash = String(currentSlideIndex)
}

currentSlide.subscribe((slideIndex) => {
  currentSlideIndex = slideIndex
  updateCurrentSlide()
})
