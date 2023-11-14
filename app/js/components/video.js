let video = () => {
    let welcomeVideoPlaceholder = document.querySelector('.welcome__video-placeholder');
    let welcomeModal = document.querySelector('.welcome__modal');
    let welcomeModalVideo = document.querySelector('.welcome__modal-video');
    let welcomeModalClose = welcomeModal.querySelector('.welcome__modal-close');

    welcomeVideoPlaceholder.addEventListener('click', () => {
        welcomeModal.classList.add('visible');
        if (welcomeModal.classList.contains('visible')) {
            welcomeModalVideo.innerHTML = '<iframe src="https://www.youtube.com/embed/o6WxMnnBmew?si=Vpdnr6DZoQgiJWkn&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            welcomeModalClose.addEventListener('click', () => {
                welcomeModal.classList.remove('visible');
            })
        } 
    })
}

video();