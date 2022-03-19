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

//  title: '',
// town: '',
// price: 0,
// district: '',
// area: '',
// floor: '',
// buildingFloors: '',

router.post('/create', (req, res) => {
    const { title, town, price, district, area, floor, buildingFloors} = req.body;
    

});

module.exports = router;