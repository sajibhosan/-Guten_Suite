

// header js start here 



// =====================
// Header JS
// =====================
// =====================
// Header JS
// =====================
// const header = document.querySelector('.header');
// const headerBar = document.querySelector('.header-bar');
// const menuArea = document.querySelector('.menu-area');

// // Mobile menu toggle
// headerBar.addEventListener('click', () => {
//   menuArea.classList.toggle('active');
// });

// // Sticky header on scroll
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 300) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// });


document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.header-bar');
  const menuArea = document.querySelector('.menu-area');

  // Mobile toggle
  toggle.addEventListener('click', () => {
    menuArea.classList.toggle('active');
  });

  // Sticky header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
});




// faq js start here
function toggleFAQ(el) {
  const item = el.parentElement;
  const answer = item.querySelector('.faq-answer');

  if (item.classList.contains('active')) {
    answer.style.maxHeight = null;
    item.classList.remove('active');
  } else {
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });
    item.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}





// preloder js start here
document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('.preloader');
  const content = document.querySelector('.content');
  
  setTimeout(() => {
    preloader.classList.add('loaded');
    
    setTimeout(() => {
      content.classList.add('visible');
    }, 500);
  }, 2000); 
});





// back to top js
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}



const avatars = document.querySelectorAll(".avatars img");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");
const authorName = document.querySelector(".author h4");
const authorRole = document.querySelector(".author span");

// Dummy Data
const testimonials = [
  {
    title: '"Amazing Work & Support"',
    desc: "They provided fantastic work with great support and dedication. Everything was on time and exceeded expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechCorp"
  },
  {
    title: '"We Were Happy To Work Together"',
    desc: "We had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle...",
    name: "Christian Russell",
    role: "Facebook"
  },
  {
    title: '"Truly Professional Service"',
    desc: "From start to finish, the team showed professionalism and creativity. They delivered exactly what we needed.",
    name: "Michael Lee",
    role: "Designer"
  }
];

// Default second active
let activeIndex = 1;

avatars.forEach((avatar, index) => {
  avatar.addEventListener("click", () => {
    // Remove old active
    avatars.forEach(av => av.classList.remove("active"));
    avatar.classList.add("active");

    // Update testimonial
    title.textContent = testimonials[index].title;
    desc.textContent = testimonials[index].desc;
    authorName.textContent = testimonials[index].name;
    authorRole.textContent = testimonials[index].role;

    activeIndex = index;
  });
});



























