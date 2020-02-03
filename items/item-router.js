
const router = require('express').Router();
const Users = require('../user/user-model.js');
const restricted = require('../auth/restricted')




router.get('/items', restricted, (req, res) => {
    Users.allItems()
    .then(item => {
      res.json(item)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get items"})
  })
  })
  
  router.get('/item/:id', restricted, (req, res) => {
    Users.findItemById(req.params.id)
    .then(item => {
      res.json(item)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get resources"})
  })
  })

  module.exports = router;