'use strict';

function getDogImage(doggoNumb) {
    fetch(`https://dog.ceo/api/breeds/image/random/${doggoNumb}`)
        .then(response => response.json())
        .then(responseJson =>
          displayResults(responseJson))
        .catch(error => alert('Something went wrong.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    let html = '';
    let num = $('input[type="number"]').val();
    for (let i=0; i<responseJson.message.length; i++) {
      html += `<img src="${responseJson.message[i]}" />`
    }
    $('.results-img').html(html)
    $('.results h2').html(`Now showing you ${num} doggos.`);
    $('.results').removeClass('hidden');
  }

function dogForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numberOfDogs = $('input[type="number"]').val()
    getDogImage(numberOfDogs);
  });
}


$(dogForm)
