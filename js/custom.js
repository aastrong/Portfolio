$(window).load(function(){
	$('body').addClass('fadein');

    $('#getintouch').click(function(e){
        e.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 800, function () { });
        $('.contact').addClass('open');
        $('section.background .bg2').addClass('shown');
        $('.container.name').fadeOut(300);
    });
    $('#closecontact').click(function(){
        $('.contact').removeClass('open');
        $('section.background .bg2').removeClass('shown');
        $('.container.name').fadeIn(500);
        $('.container.name').animate("opacity", "1");
    });


(function() {
	if($(window).width() > 767){
  $(window).scroll(function() {
    var oVal;
    var oVal2;
    var oVal3;
    oVal = $(window).scrollTop() / 400;
    oVal2 =  1- ($(window).scrollTop() /200);
    oVal3 =  (($(window).scrollTop() / 250)*30) + 180;
    $(".blur").css("opacity", oVal);
    $(".background .container.name").css("opacity", oVal2);
    $(".background .container.name").css("padding-top", oVal3);
  });
 }

}).call(this);


$('section.background').snowfall({ maxSize : 5});

});

