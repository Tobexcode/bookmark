const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content");
const faqs =document.querySelectorAll(".faq");
const btnHamburger = document.querySelector('#btnHamburger');
const btnHamburger1 = document.querySelector('#btnHamburger1');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
// const toggle = document.querySelector('.toggle');

btnHamburger1.addEventListener('click', function(){
  console.log('click hamburger');
  
  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }  
});
btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');


  if(btnHamburger1.classList.contains('active')){
    btnHamburger1.classList.remove('active');
  }

  else{
    btnHamburger1.classList.add('active');
  }


  
  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }  
});

 
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        // To remove active class from previous tab
        tabs.forEach(tab => tab.classList.remove("active"));

        tab.classList.add("active");

        // TO SHOW CONTENT ACCORDING TO THE TAB SELECTED'
        contents.forEach((c => c.classList.remove("active")));
        contents[index].classList.add("active");
    });
});

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});