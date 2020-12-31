const audio = document.getElementById("audio")
const play = document.getElementById("play")
const vol = document.getElementById("vol")

document.getElementById("play").addEventListener("click", function () {
    if (audio.paused) {
         audio.play();
         play.innerHTML="Pause"
    } else {
        audio.pause()
        play.innerHTML="Play";
    }
})
vol.addEventListener('input', function () {
    audio.volume = vol.value / 10;
})
document.getElementById("rvl-bc").addEventListener('click', function () {
    document.getElementById("back-controls").style.display="block";
    document.getElementById('rvl-bc').style.display="none";
})
document.getElementById("close").addEventListener('click', function () {
    document.getElementById("back-controls").style.display="none";
    document.getElementById('rvl-bc').style.display="flex";
})
