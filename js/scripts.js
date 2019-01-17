$(document).ready(function() {
  $("form#datingQuiz").submit(function(event) {
    var color = parseInt($("select#color").val());
    var movie = parseInt($("select#movie").val());
    var music = parseInt($("select#music").val());
    var score = color + movie + music;

    $(".results").children().hide();
    if(score <= 7){
      $(".noah").show();
    }
    else if(score > 7 && score <= 11){
      $(".emma").show();
    }
    else if(score > 11 && score <= 15){
      $(".michael").show();
    }
    else if(score > 15 && score <= 19){
      $(".rihanna").show();
    }
    else if(score > 19 && score <= 23){
      $(".timmy").show();
    }
    else if(score > 23 && score <= 27){
      $(".ariana").show();
    }
    event.preventDefault();
  });
});
