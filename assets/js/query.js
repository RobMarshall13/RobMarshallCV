$(".timeline-item").click(function(){
    $(this).children("p").toggleClass("hide");
    $(this).parent("div").toggleClass(" hvr-sweep-to-bottom")
});



// $(".timeline-item").mouseenter(function(){
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// })