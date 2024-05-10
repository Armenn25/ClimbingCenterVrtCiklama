// lang chg
const bih=document.querySelector('.bih')
const eng=document.querySelector('.eng')
let linija=document.querySelector('.lang_line')
bih.addEventListener('mouseover', ()=>{
if(bih.classList.contains('active_flag')){
  bih.style.backgroundColor = '#8b8b8b';
}
})
bih.addEventListener('mouseout', ()=>{
  if(bih.classList.contains('active_flag')){
    bih.style.backgroundColor = '';
  }
  })

  eng.addEventListener('mouseover', ()=>{
    if(eng.classList.contains('active_flag')){
      eng.style.backgroundColor = '#8b8b8b';
    }
    })
    eng.addEventListener('mouseout', ()=>{
      if(eng.classList.contains('active_flag')){
        eng.style.backgroundColor = '';
      }
      })
bih.addEventListener('click',()=>{
  if(bih){
    bih.classList.add('active_flag')
    eng.classList.remove('active_flag')
    document.querySelector('.dropbtn').innerHTML="Jezik "
    document.querySelector('.bih').innerHTML="Bosanski"
    document.querySelector('.eng').innerHTML="Engleski"
    document.querySelector('.home').innerHTML="POČETNA"
    document.querySelector('.about__us').innerHTML="O NAMA"
    document.querySelector('.gallery_l').innerHTML="GALERIJA"
    document.querySelector('.contact_l').innerHTML="KONTAKT"
    document.querySelector('.home1').innerHTML="Početna"
    document.querySelector('.about__us1').innerHTML="O nama"
    document.querySelector('.gallery_l1').innerHTML="Galerija"
    document.querySelector('.contact_l1').innerHTML="Kontakt"
    document.querySelector('.title_top').innerHTML="PENJAČKI CENTAR"
    document.querySelector('.slogan').innerHTML="Penjanje je naš jezik, a stijene su naše platno. U Drežnici svaka ruta priča svoju priču, a svaki vrh je novi početak."
    document.querySelector('.hero_btn').innerHTML="Pridruzite se"
    document.querySelector('.about_title').innerHTML="Naša priča"
    document.querySelector('.p1').innerHTML="Dobrodošli u Penjački centar Vrt CIKLAMA - vaše odredište za avanture i izazove! Smješten u srcu prirode, naš centar nudi izuzetno iskustvo penjanja za sve uzraste i nivoe vještina. Osnovan sa vizijom promocije zdravog načina života i ljubavi prema aktivnostima na otvorenom, Vrt CIKLAMA je mjesto gdje možete testirati svoje granice, naučiti nove vještine i istinski uživati u uzbuđenjima penjanja."
    document.querySelector('.p2').innerHTML="Pridružite nam se u Vrtu ciklama i doživite penjanje na potpuno nov način. Bilo da tražite novi hobi ili želite da izgradite svoje penjačke vještine, naš centar je idealno mjesto za vas. Otkrijte svoj novi omiljeni izazov - vidimo se na vrhu!"
    document.querySelector('.see_more').innerHTML="Više"
    document.querySelector('.gallery_title').innerHTML="Galerija"
    document.querySelector('.contact-us_title').innerHTML="Kontakt"
    document.querySelector('.name_f').placeholder='Ime'
    document.querySelector('.msg').placeholder='Poruka'
    document.querySelector('.footer_btn').innerHTML="Pošalji"
    document.querySelector('.adresa').innerHTML="<b>Adresa:</b>Donja Dreznica"
    document.querySelector('.footer_title').innerHTML="PENJAČKI CENTAR VRT CIKLAMA"
    document.querySelector('.tt1').innerHTML="NAVIGACIJA"
    document.querySelector('.tt2').innerHTML="PROFILI"
    document.querySelector('.copy').innerHTML="&#169; Autorsko pravo Armen Količić. Sva prava zadržana"
  }
})
eng.addEventListener('click',()=>{
  if(eng){
    bih.classList.remove('active_flag')
    eng.classList.add('active_flag')
    document.querySelector('.dropbtn').innerHTML="Language"
    document.querySelector('.bih').innerHTML="Bosnian"
    document.querySelector('.eng').innerHTML="English"
    document.querySelector('.home').innerHTML="HOME"
    document.querySelector('.about__us').innerHTML="ABOUT US"
    document.querySelector('.gallery_l').innerHTML="GALLERY"
    document.querySelector('.contact_l').innerHTML="CONTACT"
    document.querySelector('.home1').innerHTML="Home"
    document.querySelector('.about__us1').innerHTML="About Us"
    document.querySelector('.gallery_l1').innerHTML="Gallery"
    document.querySelector('.contact_l1').innerHTML="Contact"
    document.querySelector('.title_top').innerHTML="CLIMBING CENTER"
    document.querySelector('.slogan').innerHTML="Climbing is our language, and the rocks are our canvas. In Drežnica, every route tells its story, and every peak is a new beginning."
    document.querySelector('.hero_btn').innerHTML="Join Us"
    document.querySelector('.about_title').innerHTML="Our Story"
    document.querySelector('.p1').innerHTML="Welcome to the Vrt CIKLAMA Climbing Center - your destination for adventure and challenge! Located in the heart of nature, our center offers an exceptional climbing experience for all ages and skill levels. Founded with a vision of promoting a healthy lifestyle and a love for outdoor activities, Vrt CIKLAMA is the place where you can test your limits, learn new skills, and truly enjoy the thrills of climbing."
    document.querySelector('.p2').innerHTML="Join us in the Vrtu ciklama and experience climbing in a completely new way. Whether you are looking for a new hobby or want to build your climbing skills, our center is the ideal place for you. Discover your new favorite challenge - see you at the top!"
    document.querySelector('.see_more').innerHTML="See more"
    document.querySelector('.gallery_title').innerHTML="Gallery"
    document.querySelector('.contact-us_title').innerHTML="Contact Us"
    document.querySelector('.name_f').placeholder="Name"
    document.querySelector('.msg').placeholder="Message"
    document.querySelector('.footer_btn').innerHTML="Send Message"
    document.querySelector('.adresa').innerHTML="<b>Address:</b>Donja Dreznica"
    document.querySelector('.footer_title').innerHTML="CLIMBING CENTER VRT CIKLAMA"
    document.querySelector('.tt1').innerHTML="NAVIGATION"
    document.querySelector('.tt2').innerHTML="SOCIAL"
    document.querySelector('.copy').innerHTML="&#169; Copyright Armen Količić. All rights reserved"
  }
})
