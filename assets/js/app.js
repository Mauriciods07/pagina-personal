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
        duration: 2000,
        origin: 'right',
        distance: '500px'
    })

    sr.reveal('.contact-gen', {
        duration: duration,
        origin: 'bottom',
        distance: '100px'
    })

/* Lightbox - detener video al cerrarlo*/
/*  var stopVideo = () => {
    var iframes = document.querySelectorAll('iframe');
    Array.prototype.forEach.call(iframes, iframe => {
        iframe.contentWindow.postMessage(JSON.stringify({ event: 'command',
    func: 'stopVideo' }), '*');
    });
} 

function pauseVideos() 
    { 
        $('iframe').contents().find('video').each(function () 
        {
            this.currentTime = 0;
            this.pause();
        });
    }

    let videoStopper = function(id) {
        let containerElement = document.getElementById(id);
        let iframe_tag = containerElement.querySelector( 'iframe');
        let video_tag = containerElement.querySelector( 'video' );
        if ( iframe_tag) {
            let iframeSrc = iframe_tag.src;
            iframe_tag.src = iframeSrc; 
        }
        if ( video_tag) {
            video_tag.pause();
        }} */

        /* const obtenerURL = () =>{
            const pagina = document.getElementById('iframe-Safari')
            let direccionWeb = document.getElementById('urlBuscar').value;
            console.log(direccionWeb)
            pagina.src = direccionWeb;
        } */

        function obtenerURL(id) {
            const pagina = document.getElementById(id);
            pagina.src = pagina.src;
        }
        
