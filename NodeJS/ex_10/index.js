const { response } = require('express');
const express = require('express');
const Logger = require('logplease');
const oneLinerJoke = require('one-liner-joke');

const logger = Logger.create('utils');

const app = express();


app.get('/', function(request, response) {  
  response.send('Welcome Message');
});

app.get('/jokes', function(request, response) {
  var getRandomJoke1 = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
  var getRandomJoke2 = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
  response.send(`<p>${getRandomJoke1.body}</p><p>${getRandomJoke2.body}</p>`);
});

app.get('/joke', function(request, response) {
  var getRandomJoke = oneLinerJoke.getRandomJoke();
  console.log(getRandomJoke.body);
  response.send(getRandomJoke.body);
});

app.post('/joke', (request, response) => {
    response.send('my jokes are too funny, I\'m not getting new ones from you!')
});

app.put('/joke', (request, response) => {
    response.send('no, no, no... not changing my act dude!')
});

app.delete('/joke', (request, response) => {
    response.send('good jokes never get too old')
});

app.all('/joke', (request, response) => {
    response.send(' I know I\'m so good that you\'re looking for jokes everywhere')
});

const port = 3000;

app.listen(port, (err) => {  
    if (err) {
      return logger.error(`Unable to start the server on port ${port}`, err)
    }
  
    logger.info(`This HTTP server is running on port ${port}`)
});