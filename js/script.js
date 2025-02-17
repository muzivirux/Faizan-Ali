/* =================== Toggle icon navbar =================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/* =================== navbar menu color change with scroll =================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* =================== sticky navbar =================== */
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
/* =================== remove toggle icon navbar when click navbar link (scroll)  =================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* =================== Scroll Reveal =================== */
ScrollReveal({
    //  reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
    ScrollReveal().reveal('.about-img', { origin: 'left' });
    ScrollReveal().reveal('.about-content', { origin: 'right' });

    /* =================== Typedjs =================== */
    const typed =new Typed('.multiple-text', {
        strings: ['Data Analyst', 'Web Developer', 'HubSpot CMS Developer', 'HubSpot CRM Specialist', 'Zapier automation expert'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });


     /* =================== Send Email =================== */
    
     function sendEmail() {
     var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
     };
     const serviceID = "service_djkastv";
     const templateID = "template_26bzge3";

     emailjs.send(serviceID, templateID, params)
     .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Your Message Sent Successfully");
        }
     )
     }

      /* =================== Read More function =================== */
   
     function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }