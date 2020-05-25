// const menu = ['main', 'about', 'doing', 'technique', 'contact'];
// const menuVideo = ['/video/0.mp4', '/video/3.mp4', '/video/2.mp4', '/video/1.mp4', '/video/4.mp4'];

// const videoplayer = document.querySelector('.videoplayer');
// const menuList = document.querySelector('.menu-list');
// const about = document.querySelector('.about');
// const doing = document.querySelector('.doing');
// const technique = document.querySelector('.technique');
// const contact = document.querySelector('.contact');

// let chechedMenu = menu[2];
// let chechedMenuVideo = menuVideo[2];

// const toggleMenu = (e) => {
//   e.preventDefault();
//   const target = e.target.closest('.menu-link');
//   chechedMenu = menu[target.dataset.src];
//   chechedMenuVideo = menuVideo[target.dataset.src];
//   videoplayer.src = chechedMenuVideo;
//   switch (chechedMenu) {
//     case 'about' : {
//       // videoplayer.className = 'videoplayer animate__animated animate__backInLeft'; 
//       about.style.display = 'block';
//       doing.style.display = '';
//       technique.style.display = '';
//       contact.style.display = '';     
      
//       break;
//     }
//     case 'doing' : {
//       // videoplayer.className = 'videoplayer animate__animated animate__backInLeft'; 
//       about.style.display = '';
//       doing.style.display = 'block';
//       technique.style.display = '';
//       contact.style.display = '';    
//       break;  
//     }
//     case 'technique' : {
//       // videoplayer.className = 'videoplayer animate__animated animate__rubberBand'; 
//       about.style.display = '';
//       doing.style.display = '';
//       technique.style.display = 'block';
//       contact.style.display = '';      
//       break;
//     }
//     case 'contact' : {
//       // videoplayer.className = 'videoplayer animate__animated animate__backInTop'; 
//       about.style.display = '';
//       doing.style.display = '';
//       technique.style.display = '';
//       contact.style.display = 'block'; 
//       break;     
//     }
//     case 'main' : {
//       // videoplayer.className = 'videoplayer animate__animated animate__backInRight'; 
//       about.style.display = '';
//       doing.style.display = '';
//       technique.style.display = '';
//       contact.style.display = '';   
//       break;   
//     }
//   }
//   setTimeout(() => {
//     videoplayer.className = 'videoplayer'; 
//   }, 1000)  
// }

// menuList.addEventListener('click', toggleMenu);

// $(document).ready(function() {
//   $("body").css("display", "none");

//   $("body").fadeIn(0);

//   $("a").click(function(event){
//     event.preventDefault();
//     linkLocation = this.href;
//     $("body").fadeOut(1000, redirectPage);
//   });

//   function redirectPage() {
//     window.location = linkLocation;
//   }
// });

// import Swup from 'swup';
// const swup = new Swup(); 
// console.log('swup', swup)
