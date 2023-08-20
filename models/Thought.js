                                                                /* ===================== IMPORTS ====================== */
const mongoose = require("mongoose");


                                                                /* ==================== SCHEMA ======================= */
const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
        type: String,
        required: true,
    },
    // reactions (These are like replies)
    reactions: [
        {
            // Array of nested documents created with the `reactionSchema`
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reaction",
        },
    ],
});


                                                                /* ==================== VIRTUALS ====================== */
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model("Thought", thoughtSchema);


                                                                /* ==================== EXPORT ======================= */
module.exports = Thought;
