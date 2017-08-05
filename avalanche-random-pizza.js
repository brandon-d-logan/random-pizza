javascript: (function() {
  /*If jQuery does not exist, append it*/
  
  if (typeof jQuery == 'undefined') {

   var script = document.createElement('script');
   script.src = 'https://code.jquery.com/jquery-3.1.1.js';
   script.type = 'text/javascript';
   
   document.getElementsByTagName('head')[0].appendChild(script);
  }
  var randomBtn = jQuery('<a href="#" id="random-pizza" style="position:fixed;top:100px;right:100px;padding:30px;text-align:center;background:red;color:#fff;border-radius:10px;font-size:16px;">Random Pizza!</a>');
  jQuery('body').prepend(randomBtn);
  jQuery('body').on('click', '#random-pizza', function(){
    /*Clear any previous selected*/
    jQuery('span.this-one').removeClass('this-one').attr('style','');
    var counter = 0;
     /*Highlight a random pizza*/
    jQuery('span.title.red').each(function(){counter++;jQuery(this).attr('id',counter);});
    function getPizza(min, max) {return Math.random() * (max - min) + min;}
    var pizza = Math.ceil(getPizza(1,counter));
    jQuery('span#'+pizza).attr('style','display:block;padding:5px;background:#d91000;color:#fff;').addClass('this-one');
    jQuery('body,html').animate({scrollTop:jQuery('span.this-one').offset().top-120}, 'slow');
   });
 });
