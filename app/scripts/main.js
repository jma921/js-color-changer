/* global $ */
'use strict';

// $('form').submit(e => {
//   e.preventDefault();
//   var firstName = $('#firstname').val();
//   var lastName = $('#lastname').val();
//   $('#textOutput').html(firstName);
//   $('#textOutput').append(' ' + lastName);
//   // document.getElementById('textOutputJS').innerHTML=firstName;
//   $('form')[0].reset();
// });

// function changeTextColor(color) {
//   $('#textOutput').removeClass();
//   $('#textOutput').addClass(color);
// }

// function changeBackgroundColor(color) {
//   $('body').css('background-color', color);
//   $('p').css('color', 'white');
// }

// $('#redButton').click(() => changeTextColor('red'));
// $('#blueButton').click(() => changeTextColor('blue'));
// $('#greenButton').click(() => changeTextColor('green'));
// $('#orangeButton').click(() => changeTextColor('orange'));

// $('#redBackgroundButton').click(() => changeBackgroundColor('#c0392b'));
// $('#blueBackgroundButton').click(() => changeBackgroundColor('#2980b9'));
// $('#greenBackgroundButton').click(() => changeBackgroundColor('#27ae60'));
// $('#orangeBackgroundButton').click(() => changeBackgroundColor('#e67e22'));

$(document).ready(() => {
  let bg = '';
  let fill = '';
  let url = '';

  function changeColor(div, color, selector) {
    $(div).css(selector, color);
  }

  function createUrl() {
    url = `${window.location.origin}?fill=${fill}&bg=${bg}`;
  }

  function copyToClipboard(element) {
    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val($(element).text()).select();
    document.execCommand('copy');
    $temp.remove();
  }

  $('#colorPickerBackground').change(event, () => {
    console.log(event);
    changeColor('body', event.target.value, 'background-color');
    $('#hexCodeBackground').html(`Current Hex Code: ${event.target.value}`);
    const color = event.target.value;
    bg = color.replace('#', '');
    createUrl();
    $('#urlContainer').html(url);
  });

  $('#colorPickerLogo').change(event, () => {
    console.log(event);
    changeColor('svg', event.target.value, 'fill');
    $('#hexCodeLogo').html(`Current Hex Code: ${event.target.value}`);
    const color = event.target.value;
    fill = color.replace('#', '');
    createUrl();
    $('#urlContainer').html(url);
  });

  // function setTextBasedOnBrightness(color) {
  //   const tc = tinycolor(color);
  //   const brightness = tc.getBrightness();
  //   console.log(brightness);
  //   if (brightness < 180) {
  //     $('h3').css('color', 'white');
  //   } else {
  //     $('h3').css('color', 'black');
  //   }
  // }

  function getParameter(paramName) {
    var searchString = window.location.search.substring(1),
      i,
      val,
      params = searchString.split('&');

    for (i = 0; i < params.length; i++) {
      val = params[i].split('=');
      if (val[0] === paramName) {
        return val[1];
      }
    }
    return null;
  }

  $('#copyUrlButton').click(() => {
    copyToClipboard('#urlContainer');
    $('#copyUrlButton').html(
      '<span class="glyphicon glyphicon-copy" aria-hidden="true"></span> URL Copied To Clipboard'
    );
    setTimeout(function() {
      $('#copyUrlButton').html(
        '<span class="glyphicon glyphicon-paste" aria-hidden="true"></span> Click To Copy Link'
      );
    }, 3000);
  });

  const fillOnLoad = getParameter('fill');
  const bgOnLoad = getParameter('bg');
  fill = `${fillOnLoad}`;
  bg = `${bgOnLoad}`;

  createUrl();
  $('#urlContainer').html(url);

  changeColor('body', `#${bgOnLoad}`, 'background-color');
  $('#hexCodeBackground').html(`Current Hex Code: #${bgOnLoad}`);
  $('#colorPickerBackground').val(`#${bgOnLoad}`);

  changeColor('svg', `#${fillOnLoad}`, 'fill');
  $('#hexCodeLogo').html(`Current Hex Code: #${fillOnLoad}`);
  $('#colorPickerLogo').val(`#${fillOnLoad}`);
});
