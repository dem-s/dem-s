// fullpage customization
$('#fullpage').fullpage({
 /* sectionsColor: ['rgba(255, 255, 255, 0)', 'rgba(235,235,235,0.3)', 'rgba(0, 0, 0, 0.3)', 'rgba(38,80,100,0.5)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)'],*/
  normalScrollElements: '.blogPost, .commentsDiv',
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: true,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'footerSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    if (index == 1) {
        $('#fp-nav').hide();
      $('#navbar').show();
      $('#fp-nav > ul:nth-child(1) > li:nth-child(6)')
        $.fn.fullpage.moveTo(1, 0);
      } else {
        $('#navbar').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {    

   if(index == 1) {
      $('#fp-nav').show();
    }
  },

  
  
  
}); 

$(".go-to-contact").tooltip({title:"contact me", placement: "top", trigger: "hover"});
$(".go-to-top").tooltip({title:"go to top", placement: "top", trigger: "hover"})
$("#fp-nav li:nth-child(1)").tooltip({title: "Top", placement: "left", trigger : "hover"});
$("#fp-nav li:nth-child(2)").tooltip({title: "About", placement: "left", trigger : "hover"});
$("#fp-nav li:nth-child(3)").tooltip({title: "Portfolio", placement: "left", trigger : "hover"});
$("#fp-nav li:nth-child(4)").tooltip({title: "Blog", placement: "left", trigger : "hover"});
$("#fp-nav li:nth-child(5)").tooltip({title: "Contact", placement: "left", trigger : "hover"});
$("#fp-nav li:nth-child(6)").hide();

$("div.fp-prev:nth-child(3)").tooltip({title: "previous post", placement: "left", trigger : "hover"});
$("div.fp-controlArrow:nth-child(4)").tooltip({title: "next post", placement: "right", trigger : "hover"});


$("#portfolio .fp-slidesNav li:nth-child(1)").tooltip({title: "web development", placement: "top", trigger : "hover"});
$("#portfolio .fp-slidesNav li:nth-child(2)").tooltip({title: "design", placement: "top", trigger : "hover"});
$("#portfolio .fp-slidesNav li:nth-child(3)").tooltip({title: "hand drawings", placement: "top", trigger : "hover"});



//-----------------------------------
//---WEBDEV CAROUSEL TITLES---
//-----------------------------------

var titles = ['<a class="carousel-control viewOn-codepen" target="_blank" href="http://codepen.io/dem-s/pen/jrqqEW"><img class="viewOnLogo" src="https://blog.codepen.io/wp-content/uploads/2012/06/Black-Large.png"></img></a><a target="_blank" href="http://s.codepen.io/dem-s/debug/jrqqEW">Accordion slider</a>', '<a class="carousel-control viewOn-codepen" target="_blank" href="http://codepen.io/dem-s/pen/NALPQo"><img class="viewOnLogo" src="https://blog.codepen.io/wp-content/uploads/2012/06/Black-Large.png"></img></a><a target="_blank" href="http://s.codepen.io/dem-s/debug/NALPQo">FCC - Tribute page</a>', '<a class="carousel-control viewOn-codepen" target="_blank" href="http://codepen.io/dem-s/pen/kkLwYg"><img class="viewOnLogo" src="https://blog.codepen.io/wp-content/uploads/2012/06/Black-Large.png"></img></a><a target="_blank" href="http://s.codepen.io/dem-s/debug/kkLwYg">W3Cx - About page</a>'];

i=0;

//var viewOnHref = [ "http://s.codepen.io/dem-s/pen/jrqqEW", "http://s.codepen.io/dem-s/pen/NALPQo", "http://s.codepen.io/dem-s/pen/kkLwYg"];

//j=0;

$("#myCarousel_webdev .carousel-control.right").click(function(){
  $("div.webdev-titles").empty();
  $("div.webdev-titles").append(titles[i++ % titles.length]);
  
  //$(".viewOn-codepen").removeAttr("href");
  //$(".viewOn-codepen").attr("href",viewOnHref[j++ % viewOnHref.length]);
  
  
    });

$("#myCarousel_webdevSmallscreen .carousel-control.right").click(function(){
  $("div.webdev-titles").empty();
  $("div.webdev-titles").append(titles[i++ % titles.length]);
  
  //$(".viewOn-codepen").removeAttr("href");
  //$(".viewOn-codepen").attr("href",viewOnHref[j++ % viewOnHref.length]);
  
  
    });


//MEDIA QUERY

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($("#fp-nav").css("display") == "none" ){
      $('#messageText').attr("rows", 3);
      $("#webdev-sidetext > p:nth-child(3)").replaceWith("<p>You can open the web site into a new tab by clicking on the title of the frame.</p>");
      $(".commentsContainer h4").css("pointer-events", "auto");
      
      $(".commentsContainer h4").on("click", function(){
       $("h4 .fa-chevron-up").toggle();
        //$(".commentsContainer h4").empty().html("leave a comment");
       $(".blogPost").toggle();
      $(".postComment").toggle();
      $(".commentsDiv").toggle();
        $(".fp-slidesNav.bottom").toggle();
      })
      
        } 
   if ($("#myCarousel_webdevSmallscreen").css("display") == "none" ){
     $('#messageText').attr("rows", 7);
          $("#webdev-sidetext > p:nth-child(3)").replaceWith("<p>You can try the functionalities of the web site directly within the frame, or, if you prefer, you can open it into a new tab by clicking on the title of the frame.</p>");
 
     
     $(".commentsContainer h4").css("pointer-events", "none");
        }
 
  
    }
     

/*
var blogPosts = $('.blogPost').map(function(index) {
    return $(this).parent().attr('id'); 
});
*/



function submitComment(e, bP){
  e.preventDefault();
 
    var comment = $(bP).find('.commentText').val();
  var title = $(bP).find('.commentTitle').val();
  var name = $(bP).find('.inputName').val();
  var date = new Date().toLocaleDateString('en-GB');
  var time = new Date().toLocaleTimeString('en-GB');
      
      
    $(bP).find('.commentsDiv').prepend('<div class="commentShow"><header class="commentHeader"><h5>'+title+' </h5><p>'+name+'&nbsp;<small class="text-muted">'+date+' | '+time+'</small></p></header><p>'+comment+'</p></div>');
  
  
  $(bP).find('button').on("click", function() {
    $(bP).find('input:invalid').css("background", "pink");
   $(bP).find('input:valid').css("background", "white");
});
  
};
