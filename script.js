var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
          },
      }
  });
  
  var swiper = new Swiper(".swiper-main", {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
        576: {
          slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
          },
      }
  });
  
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.container-search-bar');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose= document.querySelector('#form-close');

let videoBtn= document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

