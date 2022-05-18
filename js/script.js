const playButton = document.getElementById('play-button')
const pauseButton = document.getElementById('pause-button')
const stopButton = document.getElementById('stop-button')
const textInput = document.getElementById('text')
const textInput2 = document.getElementById('text2')
const speedInput = document.getElementById('speed')

playButton.addEventListener('click', () => {
    playText(textInput2.value)
})

function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speedInput.value || 1
    speechSynthesis.speak(utterance)
   
}