var del = $("span");

// Check off a to-do by clicking on it
$("ul").on("click", "li", function(){ // THIS SAYS: "Run the function when an "li" inside of a "ul" is clicked!"
                                      // (we need to set up the eventlistener on the element, that is there, when the page first loads)
  $(this).toggleClass("completed");
});

// clicking on X to remove a to-do
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){ // refers to the "span"'s parent element - "li"
    $(this).remove(); // refers to the "$("span").parent()" element - the "li", not the "span" itself
  });
  event.stopPropagation(); // in this case - prevents the li toggleClass function from running
});

// adding new to-do's
$("input").keypress(function(event){
  if (event.which === 13) {
    // grab the text from the <input> field
    var todoText = $(this).val();
    // create a new <li> at the bottom of the list and paste the text from the <input> there
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
    // clear the <input> field
    $(this).val("");
  }
});

// clicking on + to toggle data input
$(".fa-plus").click(function(){
  $("input").fadeToggle(500);
})
