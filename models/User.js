                                                                /* ===================== IMPORTS ====================== */
const mongoose = require("mongoose");


                                                                /* ==================== SCHEMA ======================= */
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(
                    v.toLowerCase()
                );
            },
            message: (props) => `${props.value} is not a valid email!`,
        }
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

const User = mongoose.model("User", userSchema);


                                                                /* ==================== EXPORT ======================= */
module.exports = User;
