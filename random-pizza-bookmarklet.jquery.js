javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){var randomBtn=jQuery('<a href="#" id="random-pizza" style="position:fixed;top:100px;right:100px;padding:30px;text-align:center;background:red;color:#fff;border-radius:10px;font-size:16px;">Random Pizza!</a>');jQuery("body").prepend(randomBtn),jQuery("body").on("click","#random-pizza",function(){jQuery("span.this-one").removeClass("this-one").attr("style","");var r=0;jQuery("span.title.red").each(function(){r++,jQuery(this).attr("id",r)});var a=Math.ceil(function(r,a){return Math.random()*(a-r)+r}(1,r));jQuery("span#"+a).attr("style","display:block;padding:5px;background:#d91000;color:#fff;").addClass("this-one"),jQuery("body,html").animate({scrollTop:jQuery("span.this-one").offset().top-120},"slow")});});