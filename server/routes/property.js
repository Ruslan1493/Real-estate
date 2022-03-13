const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

router.get('/', (req, res) => {
    Property.find()
        .then(data => {
            res.status(200).send(JSON.stringify({
                message: 'The properties were found',
                data
            }))
        })
        .catch(err => {
            res.status(400).send(JSON.stringify({
                message: err
            }));
        })
});

module.exports = router;