const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    unique: true,
    user_tasks: { type: Array, required: true },
    userCartProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }]
});

module.exports = mongoose.model("User", userSchema);
