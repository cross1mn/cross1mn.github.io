const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
//     spaceBetween: 30,
      freeMode: true,
      grabCursor: true,

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

  autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


console.log("Java Script is nice");


// Close the overlay 
function closeOverlay () {
    document.getElementById("overlay-menu").style.width = "0";
}

// Open the overlay 
function openOverlay () {
    document.getElementById("overlay-menu").style.width = "100vw";
}

// function openOverlay () {
//     document.getElementById("overlay-menu").style.width = "100vh";
// }