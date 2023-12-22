// Lenis smoothscrool effect
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Page transition GSAP
gsap.to(".gsap-grid", {
  opacity: 0,
  duration: 0.0001,
  delay: 0.5,
  stagger: { amount: 0.5, from: "random" }
});

document.addEventListener('DOMContentLoaded', function () {
  // Add click event listener to all elements with the class "gsapAnimation"
  var triggerLinks = document.querySelectorAll('.gsap-animation');
  
  triggerLinks.forEach(function(link) {
      link.addEventListener('click', function (event) {
          // Prevent the default behavior of the link (i.e., immediate navigation)
          event.preventDefault();

          // GSAP animation with delay
          gsap.to(".gsap-grid", {
              opacity: 1,
              duration: 0.001,
              stagger: { amount: 0.5, from: "random" },
              onComplete: function () {
                  // Navigate to the link's href after the GSAP animation completes
                  window.location.href = event.target.href;
              },
          });
      });
  });
});

// GSAP hero animation
gsap.from('.gsap-hero', {
  opacity: 0,
  y: '50%',
  duration: 1,
  delay: 1,
  stagger: 0.5,
  ease: 'power3.out',
})

// GSAP selection animation
gsap.from('.gsap-selection', {
  opacity: 0,
  y: '40px',
  duration: 1,
  delay: 1,
  stagger: 0.1,
  ease: 'power3.out',
})
