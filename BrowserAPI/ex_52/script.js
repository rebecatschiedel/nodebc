let url = 'https://swapi.dev/api/films/';

let div = document.createElement('div');

fetch(url).then(function(response){   
    return response.json();
})
.then(function(data) {

    data.results.forEach(film => {
        const title = film.title;
        const episode_id = film.episode_id;
        const release_date = film.release_date;
        
        const h1Title = document.createElement('h1');
        const pEpisode = document.createElement('p');
        const pRelease = document.createElement('p');

        h1Title.innerText = `title: ${title}`;
        pEpisode.innerText = `episode_id: ${episode_id}`;
        pRelease.innerText = `release_date: ${release_date}`;

        div.appendChild(h1Title);
        div.appendChild(pEpisode);
        div.appendChild(pRelease);

    });


    const film = data.results[0];
    console.log(film);
})
.catch(function(err) {
    console.log('Fetch problem: ' + err.message);
}); 

document.body.appendChild(div);

