$(document).ready(function() {
   var design = prompt("Do you enjoy the design part of a presentation? Y for yes N for no").toUpperCase();
   var work = prompt("Would you like working for a large corporation? Y for yes N for no").toUpperCase();
   var startup = prompt("Would you like to work for a start up company? Y for yes N for no").toUpperCase();
   var apps = prompt("Would you like to design Android applications? Y for yes N for no").toUpperCase();
   var web = prompt("Do you like web developement? Y for yes N for no").toUpperCase();

      if (design === "Y" && work === "Y"){
      $("#c").show();
    } else if (design === "Y" && work === "N") {
      $("#ruby").show();
    } else if (design === "N" && work === "Y") {
      $("#php").show();
    } else if (design === "N" && orientation === "N") {
      $("#ruby").show();
    }
  });
