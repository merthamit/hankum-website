// ======================== Swiper ========================
// HERO
var swiper = new Swiper('.swiper-container-hero', {
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '',
      prevEl: '',
    },
    on: {
        snapIndexChange: (e) => {
          gsap.from('.hero__group', { opacity: 0, duration: 1, y:-150})
      
        },
        slideChange: function (e) {
        }
  },
});

// TESTIMONIALS
var swiper2 = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 12500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
// PARTNERS
var swiper3 = new Swiper('.swiper-container-brands', {
  slidesPerView: 1,
  breakpoints: {
    1024: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  }
});

// ======================== Loader ========================

let loader = document.querySelector('.loader')

window.addEventListener('load', () => {
  loader.style = 'opacity:0; visibility:hidden;'
  setTimeout(() => {
    loader.style = 'opacity:0; display:none'
  }, 2500);
})

// ======================== ANIMATE COUNT ========================

function countIt(){
  let countItem = document.querySelectorAll('.engine__number')[0]
  let countItem2 = document.querySelectorAll('.engine__number')[1]
  let countItem3 = document.querySelectorAll('.engine__number')[2]

  let counter = {
    value: 0,
    value2:0,
    value3:0
  }

  gsap.to(counter, { value: 150, duration:3, onUpdate: () => countItem.innerText = Math.round(counter.value)})
  gsap.to(counter, { value2: 200, duration:3, onUpdate: () => countItem2.innerText = Math.round(counter.value2)})
  gsap.to(counter, { value3: 310, duration:3, onUpdate: () => countItem3.innerText = Math.round(counter.value3)})
}


// ======================== VIDEO ICON ========================

const getIcon = document.querySelector('.parallax__icon')
const getPopup = document.querySelector('.video')
const getVideo = document.querySelector('.video__box')

getIcon.addEventListener('click',() => {
  getPopup.classList.toggle('show__video')
  getVideo.classList.toggle('show__box')
})

//Close video

const video = document.querySelector('.video')
const getPopup2 = document.querySelector('.video')
const getVideo2 = document.querySelector('.video__box')
const youtube = document.querySelector('.video iframe')
video.addEventListener('click', () => {
  getPopup2.classList.toggle('show__video')
  getVideo2.classList.toggle('show__box')
  setTimeout(() => {
  youtube.src = youtube.src
  }, 1000);
})

// Hambuger

const hamburger = document.querySelector('.nav__hamburger')
const nav = document.querySelector('.nav__list')

hamburger.addEventListener('click', () =>{
  nav.classList.toggle('show__nav')
})

// ======================== SCROLL REVEAL ========================

const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
});

const srCount = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
})

// Header
sr.reveal('header', {
  interval:200,
  delay:500
})

// Hero
sr.reveal('.container-hero', {
  interval:200,
  delay:1000
})

// Header
sr.reveal('.description', {
  interval:200,
  delay:1500
})

sr.reveal('.machine', {
  interval:200
})

// Engine
srCount.reveal('.engine', {
  beforeReveal: countIt,
  reset:true
})

// ======================== SCROLL TOP BTN ========================

window.addEventListener('scroll', () =>{
  let scroll = document.querySelector('.goTop')
  scroll.classList.toggle('showGoTop', window.scrollY > 500)
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

let topButton = document.querySelector('.goTop')
topButton.addEventListener('click', scrollToTop)

gsap.to('.goTop', { duration:1 , y:30, repeat:-1})