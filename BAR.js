$( ".blub-form-img" ).css('visibility','hidden');
$( ".blub-form-text" ).hide();

$("#name-bday-submit").submit(function(event) {
  event.preventDefault();
  let first = $('#first-name').val();
  let last =  $('#last-name').val();
  let month = $('#month').val();
  let day = $('#day').val();
  let year = $('#year').val();
  let name = first + '+' + last
  let newURL = `http://affinity-numerology.com/api/NumerologyAPI.php?key=aaronop&format=json&timeoffset=-08:00&type=name,birthdate&name=` + name + '&year=' + year + '&month=' + month + '&day=' + day

  numAjax(newURL);
});

function numAjax(data) {
  $.ajax ({
    method: 'GET',
    url: 'http://galvanize-cors-proxy.herokuapp.com/' + data,
    success: function (data) {
      console.log(data);
      let nameStr = data.namereading;
      let birthStr = data.birthdatereading;

      function numExtract(str) {
        var numb = str.match(/\d/g);

        return numb

      }
      console.log(numExtract(nameStr));

      // Basic Append Code
      // $('div.container-3').append( `<div class="row empty2">
      // </div>
      // <div class="row">
      // <h3 class="readings">${data.name}</h3>
      // </div>
      // <div class="row">
      // <h3 class="readings">${data.birthdatereading}</h3>
      // </div>
      // <div class="row">
      // <h3 class="readings">${data.namereading}</h3>
      // </div>
      // <div class="row empty2">
      // </div>
      // <hr>`
      // );
    },
    error: function (xhr, textStatus, errorMessage) {
      alert(errorMessage);
    }
  });
};

// Page down button
$('#page-down').click(function() {
  $('html, body').animate({scrollTop: document.body.scrollHeight},"slow");
  $( ".blub-form-img" ).css('visibility','visible ');
  $( ".blub-form-text" ).show( 700 );
});
// Page down with Next button
$('#name-bday-submit').click(function() {
  $('html, body').animate({scrollTop: document.body.scrollHeight},"slow");
});

// `${key}&format=${format}
// &type=${type}&timeoffset=${timeoffset}&name=${name}&year=${year}&month=${month}&day=${day}`
// `http://affinity-numerology.com/api/NumerologyAPI.php?key=${key}&format=${json}
// &type=${type}&timeoffset=${timeoffset}&name=${name}&year=${year}&month=${month}&day=${day}`
