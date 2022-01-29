const express = require('express');
const router = express.Router();
const User = require('../models/User');
const userValidation = require('../validations/validation');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/register', async (req, res) => {
  const { username, password, confirmPassword, email } = req.body;

  const { errorMessage, validationPassed } = userValidation(true, username, password, confirmPassword, email);
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

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const { errorMessage, validationPassed } = userValidation(false, username, password);
  if (validationPassed) {

    User.findOne({ username: username })
      .then(async data => {
        const equalPasswords = await bcrypt.compare(password, data.password);

        if (!equalPasswords) {
          return res.status(401).send(JSON.stringify({ message: 'The entered user data is invalid' }))
        }
        return res.status(200).send(JSON.stringify({ data, message: 'success' }));
      })
      .catch(err => {
        console.log('Error with user login: ', err)
        return res.status(400).send(JSON.stringify({ message: err }))
      })
  } else {
    res.status(400).send(JSON.stringify({ message: errorMessage }))
  }
});

module.exports = router;
