import { toggleIsPlaying } from './modules/MusicPlayer'
import { startUpdatingClock } from './modules/UpdateTime'
import { toggleEffectsIsPlaying, checkForRainSoundEffect } from './modules/EffectsPlayer'
import { initStars } from './modules/Stars'

// wait for document to be loaded
document.addEventListener('DOMContentLoaded', (event) => {
    startUpdatingClock()
    initStars()

    // add a event listener to click
    document.getElementById("togglePlay").addEventListener("click", () => {
        toggleIsPlaying()
    }); 

    document.getElementById("toggleRainButton").addEventListener("click", () => {
        toggleEffectsIsPlaying()
    });
})