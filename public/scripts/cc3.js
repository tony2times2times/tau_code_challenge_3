console.log('js');

$(function() {
    console.log('document ready');
    enable();
    getJokes();
}); // end addJokeButton on click

//enable clickible things on the DOM
function enable() {
    $('#addJokeButton').on('click', gather);
}
//get jokes from the server
function getJokes() {
    $.ajax({
        type: 'GET',
        url: '/jokes',
        success: function(data) {
            console.log('jokes from server: ' + data );
            displayJokes(data);
        },
        error: function() {
            console.log('DANGER Will Robinson!');
        }
    });
}

//display jokes from the server to the DOM
function displayJokes(jokes) {
    var allJokes = '<tr><td>Setup</td><td>Punch Line</td><td>Author</td>';
    for (var i = 0; i < jokes.length; i++) {
        allJokes += '<tr><td>'+ jokes[i].jokeQuestion + '</td>';
        allJokes += '<td>' + jokes[i].punchLine + '</td>';
        allJokes += '<td>' + jokes[i].whoseJoke + '</td>';
    }
    $('#outputDiv').html(allJokes);
}

//gather data about new joke from user input
function gather() {
  var newJoke = {};
  newJoke.whoseJoke = $('#whoseJokeIn').val();
  newJoke.jokeQuestion = $('#questionIn').val();
  newJoke.punchLine = $('#punchlineIn').val();
  postJokes(newJoke);
}

//Send new joke to server
function postJokes(joke) {
    $.ajax({
        type: 'POST',
        url: '/newJoke',
        data: joke,
        success: function(data) {
            console.log('jokes from server: ' + data[4]);
            displayJokes(data);
        },
        error: function() {
            console.log('DANGER Will Robinson!');
        }
    });
}
