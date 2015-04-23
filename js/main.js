$(document).ready(function(){
//progressbar values    
  $(".progressbar-html").progressbar({
  value: 80
});
$('.progressbar-css').progressbar({
  value: 80
});
$('.progressbar-jq').progressbar({
  value: 70
});
$('.progressbar-js').progressbar({
  value: 60
});
$('.progressbar-sass').progressbar({
    value:50
});
$('.progressbar-ajax').progressbar({
    value: 50
});
$('.progressbar-rwd').progressbar({
    value: 50
});
    

//on click display or hide project img
$('li.proj-item').on('click',function(){
  $(this).find('.proj-inner-item').slideToggle();
  
    });     
                  
   //smooth scroller
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  }); //end smooth scroll
    
});
