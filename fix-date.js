const nevermindBtn = document.getElementById('nevermind-btn')

nevermindBtn.addEventListener('click', () => {
  window.location.href = "index.html"
})



// SLIDES

// SET SLIDERS TO CURRENT DATE
//set month
const slideElements = document.querySelectorAll('.mySwiper .swiper-slide');
let initialSlideIndex = -1;
slideElements.forEach((slide, index) => {
  if (slide.textContent.trim() === currentMonthName) {
    initialSlideIndex = index;
  }
});

//set date
const daySlideElements = document.querySelectorAll('.day-slide');
let initialDayIndex = -1;
daySlideElements.forEach((slide, index) => {
  if (slide.textContent.trim() === day.toString()) {
    initialDayIndex = index;
  }
});

//set date
const yearSlideElements = document.querySelectorAll('.year-slide');
let initialYearIndex = -1;
yearSlideElements.forEach((slide, index) => {
  if (slide.textContent.trim() === year.toString()) {
    initialYearIndex = index;
  }
});




let activeSlide;
var monthDropdownSwiper = new Swiper("#month-dropdown", {
  direction: 'vertical',
  initialSlide: initialSlideIndex,
  loop: true,
  on: {
    slideChange: function () {
      activeSlide = this.activeIndex;
    },
  }
});

var otherSwiper = new Swiper("#days-of-month", {
  direction: 'vertical',
  initialSlide: initialDayIndex,
  loop: true,
  on: {
    slideChange: function () {
      if (this.el.id === 'month-dropdown') {
        activeSlide = this.activeIndex;
      } 
    },
  }
});

var otherSwiper = new Swiper("#year-slider", {
  direction: 'vertical',
  initialSlide: initialYearIndex,
  loop: true,
  on: {
    slideChange: function () {
      if (this.el.id === 'month-dropdown') {
        activeSlide = this.activeIndex;
      } 
    },
  }
});

