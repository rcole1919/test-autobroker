$('.catalog__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
