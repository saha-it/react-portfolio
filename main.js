/*スライダー */
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
        breakpoint: 769,
        settings: {
          centerMode: false,
        }
      }
    ]
  });

/*フェードイン */
window.addEventListener('scroll', function(){
const scroll = window.scrollY;
const windowHeight = window.innerHeight;
const boxes = document.querySelectorAll('.fadein');

boxes.forEach(function(box) {
    const distanceToBox = box.offsetTop;
    if(scroll + windowHeight > distanceToBox) {
    box.classList.add('is-active');
    }
});
});