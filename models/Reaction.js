                                                                /* ===================== IMPORTS ====================== */
const mongoose = require("mongoose");


                                                                /* ==================== SCHEMA ======================= */
const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
    },
    reactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reaction",
        },
    ],
});

const Reaction = mongoose.model("Reaction", reactionSchema);


                                                                /* ==================== EXPORT ======================= */
module.exports = Reaction;