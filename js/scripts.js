$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").fadeIn("slow");
    $("#walrus-showing").fadeOut("slow");
  });

  $(".clickable2").click(function(){
    $("#deer-showing").slideDown("slow");
    $("#deer-showing").slideUp("slow");
  });
});
