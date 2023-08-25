                                                                /* ===================== IMPORTS ====================== */
const Thought = require("../models/Thought");
const User = require("../models/User");


                                                                /* ===================== EXPORTS ====================== */
module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find({});
            res.json(thoughts);
        } 
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            res.json(thought);
        } 
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);

            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { runValidators: true, new: true }
            );

            res.json(thought);
        } 
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: "No thought found with this id!" });
            }

            res.json(thought);
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: "No thought found with this id!" });
            }

            res.json({ message: "Thought deleted!" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async addReaction(req, res) {
        console.log(req.body);
        console.log(req.params.thoughtId);
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: "No thought found with this id!" });
            }

            res.json(thought);
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: "No thought found with this id!" });
            }

            res.json(thought);
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};
