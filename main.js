$(".slide-items").slick();

$('.js-slick').slick({
    autoplay: false,
    /* autoplaySpeed: 3000, */
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '80px',
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });