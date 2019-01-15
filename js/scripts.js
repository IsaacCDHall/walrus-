$(document).ready(function() {

  var bool = true;

  $(".clickable").click(function() {
    if(bool){
      $("#walrus-showing").fadeIn();
    } else {
      $("#walrus-showing").fadeOut();
    };
    bool = !bool;
   });


















});
