let videos = {
    tenolli: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FUNAM.SIAFI%2Fvideos%2F983171252622453%2F&show_text=false&width=560&t=3170",
    gosharp: "https://www.youtube.com/embed/V0pfnVSU2FA?start=1",
    ikal: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FUNAM.SIAFI%2Fvideos%2F364438591736316%2F&show_text=false&width=560&t=0",
    gil: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FingenieriaLinguistica%2Fvideos%2F239540077707249%2F&show_text=false&width=560&t=0"
}

/* Introducir el iframe para el video */
function playVideo(id) {
    let $portfolioItem = document.querySelector('#portfolio-item');
    let video = videos[id];
    
    let iframe = `
        <div class="portfolio-content">
            <a href="#close" class="close" onclick='closeVideo("item-video")';></a>
            <iframe id="item-video" width="560" height="315" src="${video}" frameborder="0" style="border:none;overflow:hidden" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" scrolling="no" allowfullscreen></iframe>
        </div>
    `;

    $portfolioItem.innerHTML = iframe;
}

/* Quitar el video cuando se cierra el lightbox */
function closeVideo(id) {
    let $video = document.querySelector(`#${id}`);
    if($video){
        $video.remove();
    }
}

/* Resaltar las letras cuando se pasa el cursor por encima */
window.onload = () => {
    
    let node = document.querySelectorAll('.studies-title');
    
    for(let i=0; i<node.length; i++){
        let texto = node[i].innerHTML;
        let html = "";
        
        for (let j=0; j<texto.length; j++){
            html += `<span>${texto.charAt(j)}</span>`;
        }
        
        node[i].innerHTML = html;
    }
};