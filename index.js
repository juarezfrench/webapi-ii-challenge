const express = require('express');
const postsRouter = require('./hubs/postsRouter');
const server = express();


server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Fire</p>
  `);
});


// add an endpoint for adding new message to a hub

server.listen(5000, () => {
  console.log('\n*** Server Running on http://localhost:5000 ***\n');
});