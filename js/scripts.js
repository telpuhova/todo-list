//business logic
var Thing = function(title, description, isChecked, group) {
  this.title = title;
  this.description = description;
  this.isChecked = isChecked;
  this.group = group;
}

Thing.prototype.doalert = function(elem) {
  // debugger;
  alert(elem.title);
}

//ui
$(document).ready(function() {
  $("#formTodo").submit(function() {
    event.preventDefault();
    // debugger;

    var title = $("#title").val();
    var description = $("#description").val();
    var isChecked = false;
    var group = $("#group").val();
    //$("input:checkbox[name=work-transport]:checked")

    var newThing = new Thing(title, description, isChecked, group);

    $("#list").append("<p id='" + newThing.title + "P'><input id='" + newThing.title + "' type='checkbox' name='first' value='" + newThing.title + "'>" + newThing.title + "</p>");
    // <input type="checkbox" name="first" value="thing">thing<br>

    // var a = $("input:checkbox[name=first]");
    // alert($("input:checkbox[name=first]").checked);

    // input.addEventListener('change', doalert, false);
    // document.getElementById(newThing.title).addEventListener('change', newThing.doalert(newThing), false);
    document.getElementById(newThing.title).addEventListener('change', function() {
      alert(newThing.title);
      // $("#hhh").css('text-decoration', 'line-through');
      $("#" + newThing.title + "P").css('text-decoration', 'line-through');
      // $("." + newThing.title + "P").hide();
      // $("#" + newThing.title + "P").addClass(".crossedOut");
      // $(this).insertAfter($(this).parent().find('.name'));
      $("#" + newThing.title + "P").insertAfter($("#list").last());


    $("#clear").click(function() {
      $("input:checkbox[name=first]:checked").each(function(){
        // alert($(this).val())
        $(this).parent().hide();
      });
    });

    });


    // if (document.getElementById(newThing.title).checked === true)
  });
  // document.addEventListener('change', function() {
  //   alert("123123");
  // });
});
