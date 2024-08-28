const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000, 
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3
      
    }
   
  }
});



