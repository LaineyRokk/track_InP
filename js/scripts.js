$(document).ready(function() {
  $("form").submit(function(event) {
    $(".track").hide();
    var work = $("select#work").val();
    var project = $("select#project").val();
    var communicate = $("select#communicate").val();
    var salary = $("select#salary").val();
    var activity = $("select#activity").val();

    console.log(work);
    console.log(project);
    console.log(communicate);
    console.log(salary);
    console.log(activity);

    if (communicate === "a" && salary === "a") {
      $(".cSharp").show();
    } else if (work === "b" && project === "b" && communicate === "b") {
      $(".php").show();
    } else if (work === "c" && communicate === "c" && activity === "c") {
      $(".ruby").show();
    } else {
      $(".all").show();
    }

    event.preventDefault();
  });
});
