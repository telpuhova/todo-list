//business logic
var Thing = function(title, description, isChecked, group) {
  this.title = title;
  this.description = description;
  this.isChecked = isChecked;
  this.group = group;
}


//ui
$(document).ready(function() {
  $("#formTodo").submit(function() {
    event.preventDefault();

    var title = $("#title").val();
    var description = $("#description").val();
    var isChecked = false;
    var group = $("#group").val();

    var newThing = new Thing(title, description, isChecked, group);

    // add new checkbox item to the list
    $("#list").append("<p id='" + newThing.title + "P'><input id='" + newThing.title + "' type='checkbox' name='first' value='" + newThing.title + "'>" + "<span id='" + newThing.title + "Span'>" + newThing.title + "</span>" + "</p>");

    // on changing: item gets crossed and goes down
    document.getElementById(newThing.title).addEventListener('change', function() {
      // alert(newThing.title);
      $("#" + newThing.title + "P").css('text-decoration', 'line-through');
      $("#" + newThing.title + "P").insertAfter($("#list").last());
    })

    // crossed items get cleared
    $("#clear").click(function() {
      $("input:checkbox[name=first]:checked").each(function(){
        $(this).parent().hide();
      });
    });

    // description becomes visible
    $("#" + newThing.title + "Span").click(function() {
      $(".descriptionDisplay").show();
      $(".descriptionDisplay").text(newThing.description);
      $(".descriptionDisplay").click(function() {
        $(".descriptionDisplay").hide();
      });
    });


  });
});
