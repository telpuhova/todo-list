//business logic
var Thing = function(title, description, isChecked, group) {
  this.title = title;
  this.description = description;
  this.isChecked = isChecked;
  this.group = group;
}


//ui
$(document).ready(function() {
  var groups2 = [];
  var executed = false;
  alert("0");
  $("#formTodo").submit(function() {
    event.preventDefault();

    var title = $("#title").val();
    var description = $("#description").val();
    var isChecked = false;
    var group = $("#group2").val();
    // if (!group) { group = "group1";}

    var newThing = new Thing(title, description, isChecked, group);
    // debugger;
    alert("1");
    for (var i = 0; i <= groups2.length; i++) {
      alert("2");
      if (group === groups2[i]) {
        alert("3");
        // add new checkbox item to the list
        $("#list-" + newThing.group).append("<p id='" + newThing.title + "P'><input id='" + newThing.title + "' type='checkbox' name='" + group + "' value='" + newThing.title + "'>" + "<span id='" + newThing.title + "Span'>" + newThing.title + "</span>" + "</p>");
        // $("#list-" + newThing.group).insertBefore("#clear-" + newThing.group);

        // on changing: item gets crossed and goes down
        document.getElementById(newThing.title).addEventListener('change', function() {
          // alert(newThing.title);
          $("#" + newThing.title + "P").css('text-decoration', 'line-through');
          $("#" + newThing.title + "P").insertAfter($("#list-" + newThing.group));
        })


        // crossed items get cleared
        $("#clear-" + newThing.group).click(function() {
          $("input:checkbox[name=group]:checked").each(function(){
            $(this).parent().hide();
          });
        });
        executed = true;
        alert("4");
      }
    }
    if (!executed) {
      for (var i = 0; i <= groups2.length; i++) {

          alert("5");
          groups2.push(newThing.group);
          var a = groups2[0];
          // DOM MANIPULATION:


          //add group div
          // $("h1").append("<div id='" + newThing.group + "'>");
          $(".col-sm-5").append("<div id='" + newThing.group + "'>");
          $("#" + newThing.group).append("</div>");
          // $("#" + newThing.group).insertAfter("h1");

          //add list
          $("#" + newThing.group).append("<div id='list-" + newThing.group + "'>");
          $("#list-" + newThing.group).append("</div>");


          // add new checkbox item to the list
          $("#list-" + newThing.group).append("<p id='" + newThing.title + "P'><input id='" + newThing.title + "' type='checkbox' name='" + group + "' value='" + newThing.title + "'>" + "<span id='" + newThing.title + "Span'>" + newThing.title + "</span>" + "</p>");

          // on changing: item gets crossed and goes down
          document.getElementById(newThing.title).addEventListener('change', function() {
            // alert(newThing.title);
            $("#" + newThing.title + "P").css('text-decoration', 'line-through');
            $("#" + newThing.title + "P").insertAfter($("#list-" + newThing.group));
          })

          //add button
          $("#list-" + newThing.group).append("<button id='clear-" + newThing.group + "'>clear</button>");
          $("#clear-" + newThing.group).insertAfter("#list-" + newThing.group);


          // crossed items get cleared
          $("#clear-" + newThing.group).click(function() {
            $("input:checkbox[name=group]:checked").each(function(){
              $(this).parent().hide();
            });
          });
          break;

      }

    }




//^^^^^ FROZEN


    // // description becomes visible
    // $("#" + newThing.title + "Span").click(function() {
    //   $(".descriptionDisplay").show();
    //   $(".descriptionDisplay").text(newThing.description);
    //   $(".descriptionDisplay").click(function() {
    //     $(".descriptionDisplay").hide();
    //   });
    // });


  });
  // $("#clear").insertAfter("</div>");
});
