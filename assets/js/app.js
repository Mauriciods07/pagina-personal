/* Typewriter effect */
let i = 0;
let name = 'Mauricio Díaz';
let title = name + ' Desarrollador web';
let speedName = 50;
let speedTitle = 70;

window.onload = function typeWriter() {
  if (i < name.length) {
    document.getElementById("name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, speedName);
  } else if (i < title.length) {
    document.getElementById("name-title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speedTitle);
  }
}

/* scroll reveal animation */
window.sr = ScrollReveal();
let duration = 3000;

    sr.reveal('.navbar', {
        duration: duration,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.left-list, .right-list', {
        duration: duration,
        origin: 'bottom',
        distance: '100px'
    })

    sr.reveal('.abt-text, .pjct-title', {
        duration: duration,
        origin: 'left',
        distance: '100px'
    })

    sr.reveal('.abt-photo', {
        duration: duration,
        origin: 'right',
        distance: '100px'
    })

    sr.reveal('.projects-section', {
        duration: duration,
        origin: 'right',
        distance: '500px'
    })

    sr.reveal('.contact-gen', {
        duration: duration,
        origin: 'bottom',
        distance: '100px'
    })