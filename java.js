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

//   scrollreval
var up={
    easing:'ease-in-out',
    distance:'100px',
    duration:1000,
    delay:250,
    origin:'top',
    scale:1.15
}
var left={
    easing:'ease-in-out',
    distance:'200px',
    duration:1000,
    delay:250,
    origin:'left',
    scale:1.15
}
var right={
    easing:'ease-in-out',
    distance:'100px',
    duration:1000,
    delay:250,
    origin:'right',
    scale:1.15
}
var bot={
    easing:'ease-in-out',
    distance:'100px',
    duration:1000,
    delay:250,
    scale:1.15
}
var rightm={
    easing:'ease-in-out',
    distance:'100px',
    duration:1000,
    delay:250,
    origin:'right',
    scale:1.15,
    mobile:false
}
ScrollReveal().reveal('.title_top',up)
ScrollReveal().reveal('.title_bot',left)
ScrollReveal().reveal('.slogan' ,right )
ScrollReveal().reveal('.btn_div',bot)
ScrollReveal().reveal('.right',rightm)
ScrollReveal().reveal('.separator',up)
ScrollReveal().reveal('.separator_bot',up)
ScrollReveal().reveal('.about_title',up)
ScrollReveal().reveal('.p1',left)
ScrollReveal().reveal('.p2',left)
ScrollReveal().reveal('.p3',bot)
ScrollReveal().reveal('.mid_card',left)
ScrollReveal().reveal('.gallery_title',up)
ScrollReveal().reveal('.contact-us_title',up)