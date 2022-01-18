const mongoose = require('mongoose');
const User = require('../models/User');

function initDB() {
    mongoose.connect('mongodb://localhost:27017/rental-app', {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.once('open', async (err) => {
        if (err) {
            console.log(err);
        };
        const hasAdmin = await User.findOne({ isAdmin: true });
        if (!hasAdmin) {
            const adminData = await User.create({
                username: process.env.admin,
                password: process.env.password,
                email: process.env.email,
                isAdmin: true

            });
            // console.log('Admin created!');
            adminData.save();
        }
        console.log('Database connected!');
    });
    db.on('error', errorMsg => {
        console.log(errorMsg);
    });
}

module.exports = initDB;