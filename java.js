/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
       
    })
}

// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
      
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
   
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
    
}
window.addEventListener('scroll', scrollHeader)

// swiper
var mySwiper = new Swiper('.mySwiper', {
    // Opcije
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Automatsko prebacivanje
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
});

document.querySelector('.vid').play()
//swipergallery

document.addEventListener("DOMContentLoaded", function() {
  const images = [
      "images/gallery1.jpg",
      "images/gallery2.jpg",
      "images/gallery3.jpg",
      "images/gallery4.jpg",
      "images/gallery5.jpg",
      "images/gallery7.jpg",
      "images/gallery10.jpg",
      "images/back2.jpg",
      "images/test.jpg",
      "images/galerija20.png",
      "images/galerija21.png",
      "images/galerija22.png",
      "images/galerija23.png"
  ];

  let gallery = document.querySelector('.gallery_wrapper');
  for (let i = 0; i < images.length; i++) {
      gallery.innerHTML += `<div class="swiper-slide gallery-slide">
                              <img class="slider-image" src="${images[i]}" alt="">
                            </div>`;
  }

  // Koristi `requestAnimationFrame` za forsiranje renderovanja
  requestAnimationFrame(() => {
      // Ovdje možeš inicijalizirati bilo koji plugin za galeriju, npr. Swiper
      var swiper = new Swiper(".gallery_swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      });

      
      var slides = document.querySelectorAll('.swiper-slide');
      slides.forEach(function(slide) {
        slide.addEventListener('mouseenter', function() {
          slide.style.zIndex = '1001';
        });
        slide.addEventListener('mouseleave', function() {
          slide.style.zIndex = '-1';
        });
      });
            console.log("Render complete, now initializing the gallery.");
    });
});

  /*===============EMAIL===============*/
function sendMail(event){
  event.preventDefault(); // Prevent the default form submission

  if (!validateForm()) { // Ako forma nije validna, prekidamo funkciju
      return;
  }
  
  var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
  };

  const serviceID = "service_natib1r";
  const templateID ="template_hje87g9";
  emailjs.send(serviceID, templateID, params)
  .then((res) => {
      document.getElementById("name").value="";
      document.getElementById("email").value=""; // Fixed typo here
      document.getElementById("message").value="";
      console.log(res);
      Swal.fire({
          title: "Thank you",
          text: "Your message has been sent!",
          icon: "success"
        });
  })
  .catch((err) => console.log(err));
}
//validacija 
function validateForm() {
  var isValid = true;
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var nameError = document.getElementById('name-error');
  var emailError = document.getElementById('email-error');
  var messageError = document.getElementById('message-error');
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Osnovni regex za validaciju e-maila

  // Validacija imena
  if (!nameInput.value.trim()) {
      nameError.style.display = 'flex';
      isValid = false;
  } else {
      nameError.style.display = 'none';
  }

  // Validacija e-maila
  if (!regex.test(emailInput.value)) {
      emailError.style.display = 'flex';
      isValid = false;
  } else {
      emailError.style.display = 'none';
  }

  // Validacija poruke
  if (!messageInput.value.trim()) {
      messageError.style.display = 'flex';
      isValid = false;
  } else {
      messageError.style.display = 'none';
  }
  return isValid; // Ako je isValid false, sprečava slanje forme
}
