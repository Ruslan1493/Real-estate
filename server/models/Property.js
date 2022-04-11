const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    title: { type: mongoose.SchemaTypes.String, required: true },
    town: { type: mongoose.SchemaTypes.String, required: true },
    district: { type: mongoose.SchemaTypes.String, required: true },
    price: { type: mongoose.SchemaTypes.String, required: true },
    categories: [{ type: mongoose.SchemaTypes.String, required: true }],
    area: { type: mongoose.SchemaTypes.String, required: true },
    floor: { type: mongoose.SchemaTypes.String, required: true },
    buildingFloors: { type: mongoose.SchemaTypes.String, required: true },
    buildingType: { type: mongoose.SchemaTypes.String, required: true },
    description: { type: mongoose.SchemaTypes.String, required: false },
});

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;