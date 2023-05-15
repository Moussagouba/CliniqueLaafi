// const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

// const { Bounce } = require("./gsap")

// const { Bounce } = require("./gsap")

//     // Update the modal's content.
//     const modalTitle = exampleModal.querySelector('.modal-title')
//     const modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = `Nouveau message a  ${recipient}`
//     modalBodyInput.value = recipient
//   })
// }

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


// Sélectionner tous les éléments card
const cards = document.querySelectorAll(".card");

// Ajouter un écouteur d'événement de survol à chaque carte
cards.forEach((card) => {
  card.addEventListener("mouseover", function() {
    // Animer la carte en utilisant GSAP
    gsap.to(card, {scale: 1.1, duration: 0.3});
  })
  card.addEventListener("mouseleave", function() {
    // Animer la carte pour revenir à sa taille normale
    gsap.to(card, {scale: 1, duration: 0.3})})});

gsap.from(".imgr",1 , {
    opacity:0,
    x:1200,
    scale:1,
    ease: Bounce.easeOut,
    onComplete:function(){
      gsap.from('nav ul li ', 1, {
        opacity:0,
        translateY:400,
        stagger:0.2
      })
    }
}, 2);

const timeline =gsap.timeline();
timeline.from("div p", 1.5 , {
  delay:.5,
  skewX:-10,
  skewY:10,
  stagger:4,
  y:50,
  x:-20,
  opacity:0
})
timeline.from('img' , 1 , {
  y:-100,
  opacity:0,
  stagger:.2
})

gsap.timeline({
  scrollTrigger:{
    trigger:'.container',
    start:'top top',
    scrub:1
  }
})
const h = document.querySelectorAll("h1");


h.forEach((h1) => {
  h1.addEventListener("mouseover", function() {
    // Animer la carte en utilisant GSAP
    gsap.to(h1, {scale: 1.1, duration: 0.3, color:'#046380',
  x:50});
  })
  h1.addEventListener("mouseleave", function() {
    // Animer la carte pour revenir à sa taille normale
    gsap.to(h1, {scale: 1, duration: 0.3, color:'#ffffff',
  x:-50})})});
  gsap.from('div a', 1, {
        opacity:.2,
        translateY:400,
        stagger:0.2
      })

      // const essa = document.querySelectorAll("a");


      // essa.forEach((a) => {
      //   a.addEventListener("scroll", function() {
      //     // Animer la carte en utilisant GSAP
      //     gsap.to(h1, {scale: 1.1, duration: 0.3, backgroundColor:'#046380',
      //   x:50});
      //   })
      //  });