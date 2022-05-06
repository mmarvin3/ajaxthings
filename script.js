// alert("It works")

//How to request data from an API using javaScript and jQuery

//There are many ways to do this!
//1. jQuerys $.ajax() function
//2. The Browser's fetch() function
//3. Using the Axios http client library


//VARIABLES
const URL = 'http://www.omdbapi.com/?apikey=a71b148a&t=';

//ELEMENT REFERENCES
const $title = $('#title');
const $year = $('#year');
const $rating = $('#rated');
const $form = $('form');
const $input = $(`input[type="text"]`);

//EVENT LISTENERS
$form.on('submit', handleGetData)

//FUNCTIONS

function handleGetData(event) {

    event.preventDefault()
    const userInput = $input.val();

    $.ajax(URL + userInput).then(function (data) {
        console.log('movie data is ready')
        console.log(data)
        $title.text(data.Title)
        $year.text(data.Year)
        $rating.text(data.Rated)
        $('main').append(`<img src="${data.Poster}"/>`)
    }, function (error) {
        console.log('something is wrong')
        console.log(error)
    })

}
