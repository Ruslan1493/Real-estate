const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/register', (req, res) => {
  const body = req.body;
  console.log('body', body);
});

router.post('/login', (req, res) => {
  const body = req.body;
  console.log('body');
});

module.exports = router;
