const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        320: {
            autoplay: true,
            nav: true,
        },
        768: {
            autoplay: false,
            nav: false,
        }
    },

});

document.querySelector('.prev').addEventListener('click', (e) => {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', (e) => {
    slider.goTo('next');
});