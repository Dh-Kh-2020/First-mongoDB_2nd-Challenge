const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {type: String, require: true},
        address: [
            {
                country: {type: String, require: true},
                city: {type: String, require: true}
            }
        ] 
    }
)

const User = mongoose.model('User', userSchema);
module.exports = User;