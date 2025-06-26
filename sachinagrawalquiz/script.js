$(document).ready(function(){
  $("img").on("click", function(){
    $(this).siblings().removeClass("correctImage wrongImage");
    if($(this).attr("answer")=="correct" || $(this).attr("id")=="link"){
      $(this).addClass("correctImage");
    }else{
      $(this).addClass("wrongImage");
    }
  });

  $("p").on("click", function(){
    $(this).siblings().removeClass("correct wrong");

    var selectedValue = $(this).attr("value");
    var selectedId = $(this).attr("id");
    var selectedClass = $(this).attr("class");

    if(selectedValue=="1" || selectedId=="20" || selectedClass == "success"){
      $(this).addClass("correct");
    }else{
      $(this).addClass("wrong");
    }

  });

});