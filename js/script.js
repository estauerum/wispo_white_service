$('.repair__slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    prevArrow: '<div class="repair__cirlce repair__cirlce_prev"><img src="icons/svg/repair/left-arrow.svg" alt="prev" class="repair__arrow"></div>',
    nextArrow: '<div class="repair__cirlce repair__cirlce_next"><img src="icons/svg/repair/right-arrow.svg" alt="next" class="repair__arrow"></div>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  window.addEventListener('DOMContentLoaded', function() {

    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    menuHead = document.querySelector('.menu__header'),
    menuClose = document.querySelector('.menu__close'),
    hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        menuHead.classList.add('menu__header_active');
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    menuClose.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    }) 
    
    });