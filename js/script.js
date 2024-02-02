const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


let tabsBtn = document.querySelectorAll('.how__link');
let tabsItem = document.querySelectorAll('.step');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('how__link--active')});
    e.currentTarget.classList.add('how__link--active');

    tabsItem.forEach(function(element){ element.classList.remove('step--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('step--active');
  });
});


let accordion = document.querySelectorAll('.faq__btn');

accordion.forEach(function(el) {
  el.addEventListener('click', function(element){
    element.currentTarget.classList.toggle('faq__btn--active');
  });
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (element) {
  element.addEventListener('click',
    function() {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    })
})


let search = document.querySelector('.nav__search');
let searchWindow = document.querySelector('.search');

search.addEventListener('click', function() {
  searchWindow.classList.toggle('search--active');
});
