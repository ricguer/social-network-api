                                                                /* ===================== IMPORTS ====================== */
const User = require("../models/User");


                                                                /* ===================== EXPORTS ====================== */
module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find({});
            res.json(users);
        } 
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId });
            res.json(user);
        } 
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } 
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
        } 
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: "No user found with this id!" });
            }
            
            await Thought.deleteMany({ username: user.username });

            res.json({ message: "User deleted!" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: "No user found with this id!" });
            }

            res.json(user);
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: "No user found with this id!" });
            }

            res.json(user);
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
};
