const swiper = new Swiper('.swiper-container', {
  // Default parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  // Optional parameters
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.carousel-button-next',
    prevEl: '.carousel-button-prev',
  },
});
