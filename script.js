const header = document.querySelector(".header"); 
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
    
        header.classList.remove("scroll");
    } else {
     
        header.classList.add("scroll");
    }

    prevScrollPos = currentScrollPos;
});


document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const navbar = doc.querySelector(".header"); // Select the navbar class
            if (navbar) {
                document.getElementById("navbar-placeholder").innerHTML = navbar.outerHTML;
            }
        })
        .catch(error => console.error("Error loading the navbar:", error));
});

// Get all the links in the navbar
const navbarLinks = document.querySelectorAll('.navbar a');

// Get the current page's URL
const currentPage = window.location.pathname.split("/").pop();

// Loop through the links and check if the link's href matches the current page
navbarLinks.forEach(link => {
    // If the link's href matches the current page, add the 'active' class
    if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('active');
    }

    // Add event listener to remove active class when clicked
    link.addEventListener('click', () => {
        navbarLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});


    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        const logo = document.getElementById('logo');

        if (window.scrollY > 50) {
            header.classList.add('scroll');
            logo.src = 'images/logo.png'; // Path to your white logo
        } else {
            header.classList.remove('scroll');
            logo.src = 'images/logowhite.png'; // Path to your black logo
        }
});

