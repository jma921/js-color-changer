$("form").submit(e => {
  e.preventDefault();
  var firstName = $("#firstname").val();
  var lastName = $("#lastname").val();
  $("#textOutput").html(firstName);
  $("#textOutput").append(" " + lastName);
  // document.getElementById('textOutputJS').innerHTML=firstName;
  $('form')[0].reset();
});

function changeTextColor(color) {
  $("#textOutput").removeClass();
  $("#textOutput").addClass(color);
}

function changeBackgroundColor(color) {
  $('body').css("background-color", color)
  $('p').css('color', 'white')
}

$("#redButton").click(() => changeTextColor("red"));
$("#blueButton").click(() => changeTextColor("blue"));
$("#greenButton").click(() => changeTextColor("green"));
$("#orangeButton").click(() => changeTextColor("orange"));

$("#redBackgroundButton").click(() => changeBackgroundColor("#c0392b"));
$("#blueBackgroundButton").click(() => changeBackgroundColor("#2980b9"));
$("#greenBackgroundButton").click(() => changeBackgroundColor("#27ae60"));
$("#orangeBackgroundButton").click(() => changeBackgroundColor("#e67e22"));
