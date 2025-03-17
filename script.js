  document.addEventListener( 'DOMContentLoaded', function () {
    splide = new Splide( '#image-carousel', {
        autoScroll: {
            speed: 2,
          },
        type   : 'loop',
        perPage: 4,
        focus  : 2,
        breakpoints: {
          768: { 
              perPage: 1,
              focus: 'start',
              padding:'3rem'
          }}
      } );
      splide.mount();

    });
    // add fluent scroll for the list 
  let list = document.querySelector(".splide__list");
  list.style.transition = "transform 3s ease-in !important";

  // update the desctiption text  
  let slides = document.querySelectorAll(".splide__slide");
  slides.forEach((elm,index) => {
    let textSlide = `<span class="text-content">
    <p class="outlined-text">${index+1} - Zu unserer </p>
    </span>
    <span class="text-content">
    <p class="outlined-text">Kundenreferenz </p>
    </span>
    <span class="text-content">
    <p class="gradient-text">TTL/TTM</p>
    </span>`;
   let description = elm.querySelector(".description");
   console.log(description);
    description.innerHTML = textSlide;
    
  });
 