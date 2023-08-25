                                                                /* ===================== IMPORTS ====================== */
// const mongoose = require("mongoose");
const {Schema, Types} = require("mongoose");


                                                                /* ==================== SCHEMA ======================= */
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);


                                                                /* ==================== EXPORT ======================= */
module.exports = reactionSchema;
