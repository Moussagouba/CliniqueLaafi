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
  x:0})})});

  
  gsap.from('div a', 1, {
        opacity:.2,
        translateY:400,
        stagger:0.2
      })
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