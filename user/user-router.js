const jwt = require('jsonwebtoken')
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../user/user-model.js');
const {jwtSecret} = require('./secret.js');
const restricted = require('../auth/restricted')


router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        const token = generateToken(user); 

        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/users', restricted, (req, res) => {
  Users.find()
  .then(users => {
    res.json(users)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: "failed to get users"});
  });
});

router.get('/users/:id/items', restricted, (req, res) => {
  const id = req.params.id;
  
  Users.findUserItems(id)
    .then(items => {
      res.status(200).json(items);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was and error getting the items" });
    });
});

router.post('/users/:id/items', (req, res) => {
  const id = req.params.id;
  console.log(req.params.id)

  Users.addItemToUser(id, req.body)
    .then(newItem => {
      //console.log(newItem)
      res.status(201).json(newItem)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "There was an error adding the item" });
    });
});



function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username,
  }

  const options = {
    expiresIn:'1d',
  }
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;