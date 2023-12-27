document.addEventListener("mousemove", function (event) {
    var glow = document.createElement("div");
    glow.className = "glow";
    var glowInner = document.createElement("div");
    glowInner.className = "glow-inner";
    glow.appendChild(glowInner);
    document.body.appendChild(glow);
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
    setTimeout(function () {
        glow.remove();
    }, 2000);
});


//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }

    
    });

    //sticky header
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}






