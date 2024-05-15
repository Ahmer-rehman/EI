// script.js
window.onbeforeunload = function () {
    localStorage.setItem(
      "scrollPosition",
      window.scrollY || document.documentElement.scrollTop
    );
  };
  window.onload = function () {
    if (localStorage.getItem("scrollPosition")) {
      window.scrollTo(0, parseInt(localStorage.getItem("scrollPosition")));
    }
  };
function updateClock() {
    const now = new Date(); // Get current date and time
    const hours = now.getHours().toString().padStart(2, '0'); // Format hours
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Format minutes
    const day = now.getDate().toString().padStart(2, '0'); // Format day
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Format month
    const year = now.getFullYear(); // Get full year

    document.getElementById('time').innerHTML = `${month}<span class="heart">❤</span>`; // Update time
    document.getElementById('date').innerHTML = `-${day}`; // Update date
}

setInterval(updateClock, 1000); 

document.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight; 
    const docHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY;
        const maxLineHeight = 100; 

    const scrolledPercentage = (scrollPosition / (docHeight - windowHeight)) * 100;

    const lineHeight = (maxLineHeight * scrolledPercentage) / 100;
    document.querySelector('.s-line').style.height = `${lineHeight}px`;
});
document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach(function(element) {
      element.style.opacity = "1";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const revealSection2 = document.querySelector(".moto");
  
    function revealOnScroll() {
      const elementPosition = revealSection2.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition < windowHeight * 0.75) {
        revealSection2.style.opacity = "1";
       
      }
    }
  
    window.addEventListener("scroll", revealOnScroll);
  });
  
  document.addEventListener("scroll", function() {
    const revealSections = document.querySelectorAll(".reveal-section");
    const container = document.querySelector(".container");
  
    function revealOnScroll() {
      revealSections.forEach(function(section) {
        const elementPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.75) {
          section.style.opacity = "1";
         
        }
      });
    }
  
    window.addEventListener("scroll", revealOnScroll);
    // Trigger the reveal animation for the container when DOM is loaded
    container.classList.add("reveal-container");
  });
  

document.addEventListener("scroll", function() {
    const revealElements = document.querySelectorAll(".project-container,.Contact-container, .letsworktogeter, .footer-container");
  
    function revealElementOnScroll(element) {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition < windowHeight * 0.5) {
        element.classList.add("reveal-left-to-right");
      }
    }
  
    window.addEventListener("scroll", function() {
      revealElements.forEach(function(element) {
        revealElementOnScroll(element);
      });
    });
  });
  // TypeWriter
//   document.addEventListener("DOMContentLoaded", function() {
//     const words = document.querySelectorAll('.split_word');
//     let delay = 0;

//     words.forEach((word) => {
//         setTimeout(() => {
//             word.classList.add('active');
//             const text = word.getAttribute('data-word');
//             word.innerHTML = '';
//             let i = 0;
//             const interval = setInterval(() => {
//                 word.innerHTML += text.charAt(i);
//                 i++;
//                 if (i >= text.length) {
//                     clearInterval(interval);
//                 }
//             }, 100);
//         }, delay);
//         delay += 1000; // Adjust delay as needed
//     });
// });
  // header element animation 
  window.addEventListener('scroll', function() {
    const nameContainer = document.querySelector('.name-container');
    if (window.scrollY === 0) {
        nameContainer.classList.remove('hidden');
    } else {
        nameContainer.classList.add('hidden');
    }
});
