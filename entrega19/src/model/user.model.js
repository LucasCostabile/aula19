const mongoose = require('mongoose');
const userCollection = 'users'; 

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user','coder'],
        default: 'user'
    }
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;