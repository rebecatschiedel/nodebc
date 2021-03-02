let url = 'https://swapi.dev/api/films/';

fetch(url).then(function(response){
    return response.json();   
})
.then(function(data) {
    console.log(data);
})



