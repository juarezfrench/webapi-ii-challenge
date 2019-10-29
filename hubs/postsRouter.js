const router = require('express').Router();
const Hubs = require('./hubsModel');

    router.get('/api/posts', (req, res) => {
        Hubs.find(req.query)
        .then(hubs => {
          res.status(200).json(hubs);
        })
        .catch(error => {
          // log error to database
          console.log(error);
          res.status(500).json({
            message: 'Error retrieving the hubs',
          });
        });
      });
      
      router.get('/:id', (req, res) => {
        Hubs.findById(req.params.id)
        .then(hub => {
          if (hub) {
            res.status(200).json(hub);
          } else {
            res.status(404).json({ message: 'Hub not found' });
          }
        })
        .catch(error => {
          // log error to database
          console.log(error);
          res.status(500).json({
            message: 'Error retrieving the hub',
          });
        });
      });
      
      router.post('/', (req, res) => {
        Hubs.add(req.title, req.contents)
        .then(hub => {
          res.status(201).json(hub);
        })
        .catch(error => {
          // log error to database
          console.log(error);
          res.status(500).json({
            message: 'Make sure you have a title and contents',
          });
        });
      });
      
      router.delete('/:id', (req, res) => {
        Hubs.remove(req.params.id)
        .then(count => {
          if (count > 0) {
            res.status(200).json({ message: 'The hub has been nuked' });
          } else {
            res.status(404).json({ message: 'The hub could not be found' });
          }
        })
        .catch(error => {
          /log error to database/
          console.log(error);
          res.status(500).json({
            message: 'Error removing the hub',
          });
        });
      });
      
      router.put('/:id', (req, res) => {
        const changes = req.body;
        Hubs.update(req.params.id, changes)
        .then(hub => {
          if (hub) {
            res.status(200).json(hub);
          } else {
            res.status(404).json({ message: 'The hub could not be found' });
          }
        })
        .catch(error => {
          // log error to database
          console.log(error);
          res.status(500).json({
            message: 'Error updating the hub',
          });
        });
      });
      
      // add an endpoint that returns all the messages for a hub
      router.get('api/hubs/:id/messages', (req, res) => {
      const hubId = req.params.id;
      const message = {...req.body}
      })//route can have route/request handlers and middleware


module.exports = postsRouter;