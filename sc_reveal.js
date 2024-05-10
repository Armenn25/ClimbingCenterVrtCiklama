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
ScrollReveal().reveal('.gallery_title',{
    easing:'ease-in-out',
distance:'100px',
duration:1000,
delay:250,
origin:'top',
})
ScrollReveal().reveal('.contact-us_title',{
    easing:'ease-in-out',
distance:'100px',
duration:1000,
delay:250,
origin:'top',
}

)