let response = `{
    "title": "A New Hope", 
    "episode_id": 4, 
    "species": [
      "https://swapi.co/api/species/5/", 
      "https://swapi.co/api/species/3/", 
      "https://swapi.co/api/species/2/", 
      "https://swapi.co/api/species/1/", 
      "https://swapi.co/api/species/4/"
    ]
  }`;

  let responseParsed = JSON.parse(response);

  let div = document.querySelector('#jsonresponse');

  let title = document.createElement('h1');
  title.innerText = responseParsed.title;

  let episodeID = document.createElement('p');
  episodeID.innerText = 'Episode ID: ' + responseParsed.episode_id;

  div.appendChild(title);
  div.appendChild(episodeID);
  
  responseParsed.species.forEach((specie, index) => {
    let link = document.createElement('a');
    link.setAttribute('href', specie);
    link.innerText = 'Link ' + (index + 1);

    div.appendChild(link);
  });



