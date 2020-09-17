// check item
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on x to delete
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(150, function(){
    $(this).remove();
  });
  // avoid event bubbling
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    const todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle(150);
})