const express = require('express');
const port = 3000;

const app = express();

app.get('/api/products', (req, res) => {
    res.json({
        description: 'Products',
        items: [
          { name: 'Star Wars jacket' , price: 100},
          { name: 'FIFA 22 PS4' , price: 79},
          { name: 'Superheore t-shirt' , price: 10},
          { name: 'Jets game shirt' , price: 200},
          { name: 'Large Meat lovers pizza' , price: 12},
          { name: 'Canada Dry  bottle' , price: 2}
        ]
      });
})

app.listen(port, (err) => {  
    if (err) {
      return console.log(`Unable to start the server on port ${port}`, err)
    }
  
    console.log(`This HTTP server is running on port ${port}`)
});