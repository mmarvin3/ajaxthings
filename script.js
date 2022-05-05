// alert("It works")

//How to request data from an API using javaScript and jQuery

//There are many ways to do this!
//1. jQuerys $.ajax() function
//2. The Browser's fetch() function
//3. Using the Axios http client library

const URL = 'http://www.omdbapi.com/?apikey=a71b148a&t=Die+Hard';

function handleGetData() {
    $.ajax(URL).then(function (data) {
        console.log('movie data is ready')
        console.log(data)
    }), function (error) {
        console.log('something is wrong')
        console.log(error)
    }

}
