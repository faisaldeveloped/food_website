//Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>
{
    navbar.classList.toggle('active');
}

window.onscroll = () =>
{
    navbar.classList.remove('active');
}

//Dark Mode
let darMode = document.querySelector('#darkMode');

darMode.onclick = () =>
{
    if(darMode.classList.contains('bx-moon'))
    {
        darMode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
    else
    {
        darMode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

//Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal('.home_text, .home_img, .about_img, .about_text, .box, .s_box, .connect_text, .btn, .contact_box',{interval: 200});

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}