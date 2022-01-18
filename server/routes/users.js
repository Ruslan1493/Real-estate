const express = require('express');
const router = express.Router();
const User = require('../models/User');
const userValidation = require('../validation');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/register', async (req, res) => {
  const { username, password, confirmPassword, email } = req.body;

  const { errorMessage, validationPassed } = userValidation(username, password, confirmPassword, email, true);
  if (validationPassed) {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    User.create({
      username, password: hashedPass, email
    })
      .then(data => {
        res.status(200).send(JSON.stringify({ data, message: 'success' }));
      })
      .catch(err => {
        console.log('Error with user creation: ', err)
      });
  } else {
    res.status(400).send(JSON.stringify({ message: errorMessage }))
  }

});

router.post('/login', (req, res) => {
  const body = req.body;
  console.log('body');
});

module.exports = router;
