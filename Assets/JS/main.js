
// JavaScript to toggle the hamburger menu and side navigation
const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
    sideNav.classList.add('show'); // Show the side nav when hamburger is clicked
});

closeBtn.addEventListener('click', () => {
    sideNav.classList.remove('show'); // Hide the side nav when close button is clicked
});



// Script for Tabs --------------------------
function showTab(contentId) {
  
  const allContents = document.querySelectorAll('.tab-content');
  allContents.forEach(content => {
    content.style.display = 'none';
  });

  
  const selectedContent = document.getElementById(contentId);
  selectedContent.style.display = 'block';

  
  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(tab => {
    tab.classList.remove('active')
  });

}
// Script for Tabs 2 --------------------------

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// --------------- owlCarousel start -------------
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  navigation: true,
  dots: true,
  nav: false,
  items: 3, 
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3  
    }
  }
});




var activeItems = $('.owl-item.active');
if (activeItems.length >= 3) {
  activeItems.eq(1).css('margin-top', '-35px');
}


$('.owl-carousel').on('changed.owl.carousel', function (event) {
  setTimeout(function () {
    
    var activeItems = $('.owl-item.active');
    $('.owl-item').css('margin-top', '0px');
    
   
    if (activeItems.length >= 3) {
      activeItems.eq(1).css('margin-top', '-35px');
    }
  }, 500);
});












// --------------- owlCarousel end -------------



// --------------- Counter start -------------


function animateNumber(element) {
  const target = parseInt(element.getAttribute('data-count'), 10);
  const symbol = element.textContent.replace(/\d+/g, '').trim();
  let current = 0;
  const increment = target / 100;

  const formatNumber = new Intl.NumberFormat();
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }

    element.textContent = formatNumber.format(Math.ceil(current)) + symbol;
  }, 30);
}


const counters = document.querySelectorAll('.achivement_number .box span');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      animateNumber(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

counters.forEach(counter => {
  observer.observe(counter);
});
// --------------- Counter end -------------


















