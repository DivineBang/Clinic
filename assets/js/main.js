$(document).ready(function(){
    $('.center').slick({
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1500,
      centerPadding: '10px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 993,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 2
          }
        },
        
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 577,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 1
          }
          
        },
        {
          breakpoint: 450,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
          
        }
        
      ]
    });
});

//header

$(function() {
  let header = $('.header');
  let hederHeight = header.height(); // вычисляем высоту шапки
   
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('scrolled');
     $('body').css({
        'paddingTop': hederHeight+ 'px' // делаем отступ у body, равный высоте шапки
     });
    } else {
     header.removeClass('scrolled');
     $('body').css({
      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
     })
    }
  });
 });

  document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelector('.popup-btn');

    
    const popupBtn2 = document.querySelector('.popup-btn2');


    popup.addEventListener('click', function(event) {
      if (event.target === this) {
        popup.classList.remove('popup--open');
      }
    });
   

    popupBtn.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('popup--open');
    });

    popupBtn2.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('popup--open');
    }); 
    
  });   
    
    document.addEventListener('DOMContentLoaded', function() {
      const popup2 = document.querySelector('.popup2');
      const popupBtn3 = document.querySelector('.popup-btn3');
    
      popup2.addEventListener('click', function(event) {
        if (event.target === this) {
          popup2.classList.remove('popup--open2');
        }
      });
      
      popupBtn3.addEventListener('click', function(event) {
        event.preventDefault();
        popup2.classList.add('popup--open2');
      });
    });
    
   
  
//burger

$(document).ready(function(){
  $('.header-menu').click(function(event){
    $('.menu').toggleClass('active-menu');

  });
});  



// validate

$.validator.addMethod('regex', function(value, element, regexp) {
  let regExp = new RegExp(regexp);
  return this.optional(element) || regExp.test(value);
}, 'Please check your input.');

$('#form').validate({
  rules: {
    firstName: {
      required: true,
      regex: "[А-Яа-я A-Za-z]{1,32}"
    },
    phoneNumber:{
      required: true,
      minlength:13,
      maxlength:14
    }
  },
  messages: {
    firstName: "Введіть ім'я правильно",
    phoneNumber: "Введіть номер правильно"
  }
});




