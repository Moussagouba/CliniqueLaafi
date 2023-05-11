const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `Nouveau message a  ${recipient}`
    modalBodyInput.value = recipient
  })
}

const video = document.getElementById("my-video");
const playPauseButton = document.getElementById("play-pause-btn");

playPauseButton.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    playPauseButton.classList.remove("play-btn");
    playPauseButton.classList.add("pause-btn");
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    playPauseButton.classList.remove("pause-btn");
    playPauseButton.classList.add("play-btn");
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});
