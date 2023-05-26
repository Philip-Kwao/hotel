const toggleEl = document.querySelector(".toggle")
const toggleDivEl = document.createElement("div")
const sectionEl = document.querySelector(".navSection")
const cancelEl = document.querySelector(".cancel")
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.getElementsByClassName('navigation');

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default anchor link behavior

      var target = document.querySelector(this.getAttribute('href')); // Get the target section element
      var offset = target.offsetTop; // Get the top position of the target section

      window.scrollTo({
        top: offset,
        behavior: 'smooth' // Use smooth scrolling behavior
      });
    });
  }
});

toggleDivEl.innerHTML = `
<div class="toggleNavigate">
<a class="toggleNav" href="#home">Home</a>
<a class="toggleNav" href="#about">About</a>
<a class="toggleNav" href="#room">Room</a>
<a class="toggleNav" href="#gallery">Gallery</a>
<a class="toggleNav" href="#review">Review</a>
<a class="toggleNav" href="#faq">Faq</a>
<button class="toggledbookBtn">Book Now</button>
</div>
`


sectionEl.appendChild(toggleDivEl)
function toggled(){
        // toggleEl.style.display = "none"
        // cancelEl.style.display = "block"
        // toggleDivEl.style.display = "block"
        sectionEl.classList.toggle("navSection")
    }
   
function cancelled(){
    toggleEl.style.display = "block"
    cancelEl.style.display = "none"

    toggleDivEl.style.display = "none"

}
    
    // toggleEl.addEventListener("click", toggled)
    // cancelEl.addEventListener("click", cancelled)


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000, // Delay in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      slidesPerView:1,
  });

  var swiper = new Swiper(".mySwiper2", {
    // slidesPerView: 4,
    spaceBetween:30,
    grabCursor:true,
    autoplay: {
        delay: 1500, // Delay in milliseconds
        disableOnInteraction: false,
      },
      loop: true,
    centeredSlides: true,
    centerInsufficientSlides:false,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   dynamicBullets: true,
    // },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        780:{
            slidesPerView: 2,
        },
        1080:{
            slidesPerView: 3,
        },
    }
  });

//   GALLERY SLIDER
  var swiper = new Swiper('.myswiper3',{
    spaceBetween:20,
    autoplay: {
        delay: 2500, // Delay in milliseconds
        disableOnInteraction: false,
      },
      loop: true,
    centeredSlides: true,
    // spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    }
  })

  var swiper = new Swiper('.swiper-testimonials',{
    slidesPerView:2,
    spaceBetween:0,
    autoplay: {
        delay: 2000, // Delay in milliseconds
        disableOnInteraction: false,
      },
      loop: true,
    centeredSlides: true,
    centerInsufficientSlides: true,
    // direction: 'vertical'

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 1,
        }
    }
})

var swiper = new Swiper('.client__swiper', {
  spaceBetween: 500,
  grabCursor:true,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
})