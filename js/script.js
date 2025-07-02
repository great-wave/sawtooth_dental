//Show/Hide Overlay

const menuIcon = document.getElementById("menuIcon");
const menuLink = document.getElementById("menuLink");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

menuIcon.addEventListener("click", function() {
    menuOverlay.classList.remove('-translate-x-full');
});

menuLink.addEventListener("click", function(){
    menuOverlay.classList.remove('-translate-x-full');
});

closeMenu.addEventListener("click", function() {
    menuOverlay.classList.add('-translate-x-full');
});



// Header hide/show based on hero section
const header = document.querySelector('header');
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
  const currentScrollY = window.scrollY;
  const heroHeight = window.innerHeight; // One full screen height
  
  if (currentScrollY > heroHeight && currentScrollY > lastScrollY) {
    // Past hero section AND scrolling down - hide header
    header.classList.add('-translate-y-full');
  } else if (currentScrollY < lastScrollY) {
    // Scrolling up (anywhere) - show header
    header.classList.remove('-translate-y-full');
  }
  // If still in hero section, header stays visible (do nothing)
  
  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', function() {
  if (!ticking) {
    requestAnimationFrame(updateHeader);
    ticking = true;
  }
});

// Contact Form

$("#sendMessageButton").click(function() {
  const patientName = $("#patientName").val();
  const phone = $("#phone").val();
  const email = $("#email").val();
  const preference = $("#preference").val();


});

$(document).ready(function() {
  let isScrolling = false;
  
  // Function to add bounce effect
  function addBounceEffect(direction) {
    if (isScrolling) return;
    isScrolling = true;
    
    $('body').addClass('transform transition-transform duration-300 ease-out');
    
    if (direction === 'up') {
      $('body').css('transform', 'translateY(30px)');
    } else {
      $('body').css('transform', 'translateY(-30px)');
    }
    
    setTimeout(() => {
      $('body').removeClass('ease-out').addClass('ease-bounce');
      $('body').css('transform', 'translateY(0)');
    }, 100);
    
    setTimeout(() => {
      $('body').removeClass('transform transition-transform duration-300 ease-bounce');
      $('body').css('transform', '');
      isScrolling = false;
    }, 400);
  }
  
  // Mouse wheel detection
  $(window).on('wheel', function(e) {
    const scrollTop = $(window).scrollTop();
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    
    // At top and scrolling up
    if (scrollTop <= 0 && e.originalEvent.deltaY < 0) {
      e.preventDefault();
      addBounceEffect('up');
    }
    
    // At bottom and scrolling down
    if (scrollTop >= documentHeight - windowHeight && e.originalEvent.deltaY > 0) {
      e.preventDefault();
      addBounceEffect('down');
    }
  });
});

