$("form").submit(e => {
  e.preventDefault();
  var firstName = $("#firstname").val();
  var lastName = $("#lastname").val();
  $("#textOutput").html(firstName);
  $("#textOutput").append(" " + lastName);
  // document.getElementById('textOutputJS').innerHTML=firstName;
});

function changeTextColor(color) {
  $("#textOutput").removeClass();
  $("#textOutput").addClass(color);
}

$("#redButton").click(() => changeTextColor("red"));
$("#blueButton").click(() => changeTextColor("blue"));
$("#greenButton").click(() => changeTextColor("green"));
$("#orangeButton").click(() => changeTextColor("orange"));
