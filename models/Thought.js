                                                                /* ===================== IMPORTS ====================== */
const {Schema, model} = require("mongoose");
const Reaction = require("./Reaction");


                                                                /* ==================== SCHEMA ======================= */
const thoughtSchema = new Schema({
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
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [ Reaction ],
});


                                                                /* ==================== VIRTUALS ====================== */
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);


                                                                /* ==================== EXPORT ======================= */
module.exports = Thought;
