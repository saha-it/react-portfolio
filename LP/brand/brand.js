let jsAccordion = document.querySelectorAll('.question-block');
jsAccordion.forEach(function(element) {
  element.addEventListener('click', function(e) {
    let eleHeight = element.nextElementSibling;
    if(element.classList.contains('is-accordion--open')){
      eleHeight.style.height = '0';
    } else {
      eleHeight.style.height = eleHeight.scrollHeight + 'px';
    }
    element.classList.toggle('is-accordion--open');
  });
});


$('.single-item').slick();
