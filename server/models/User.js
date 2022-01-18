const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: mongoose.SchemaTypes.String, required: true},
    password: { type: mongoose.SchemaTypes.String, required: true},
    email: { type: mongoose.SchemaTypes.String, required: true},
    isAdmin: { type: mongoose.SchemaTypes.Boolean, default: false },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;