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



  $("button#primary").click(function() {
    $("body").removeClass();
    $("body").addClass("primary-background");
  });

  $("button#secondary").click(function(){
    $("body").removeClass();
    $("body").addClass("secondary-background");
  });

  $("button#success").click(function() {
    $("body").removeClass();
    $("body").addClass("success-background");
  });

  $("button#warning").click(function() {
    $("body").removeClass();
    $("body").addClass("warning-background");
  });

  $("button#blackout").click(function(){
    $("body").removeClass();
    $("body").addClass("blackout")

  });

  $("button#whiteout").click(function(){
    $("body").removeClass();
    $("body").addClass("whiteout")

  });

  $("p#highlight-para").click(function(){
    
    $("p#highlight-para").removeClass();
    $("p#highlight-para").addClass("highlight");
  });




















});
