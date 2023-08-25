const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const usernames = [
      "lernantino" ,
      "codingmaster" ,
      "techgeek123" ,
      "designguru" ,
      "gamer123" ,
      "webdevpro" ,
      "musiclover22" ,
      "fitnessfanatic" ,
      "bookworm99" ,
      "travelbug45"
    ];

    const emails = [
      "lernantino@gmail.com",
      "codingmaster@example.com",
      "techgeek123@gmail.com",
      "designguru@example.com",
      "gamer123@gmail.com",
      "webdevpro@example.com",
      "musiclover22@gmail.com",
      "fitnessfanatic@example.com",
      "bookworm99@gmail.com",
      "travelbug45@example.com"
    ];

    const thoughts = [
      "Here's a cool thought..." ,
      "I like to code" ,
      "I like technology" ,
      "I like to design things" ,
      "I like to play video games" ,
      "I like to develop websites" ,
      "I like to listen to music" ,
      "I like to workout" ,
      "I like to read books" ,
      "I like to travel"
    ];

    // Use the "usernames" and "emails" arrays to create documents in the "User" collection
    for (let i = 0; i < usernames.length; i++) {
      const user = usernames[i];
      const email = emails[i];
      await User.create({
          username: user,
          email: email
      });
    }

    // Insert thoughts into each user document
    for (let i = 0; i < thoughts.length; i++) {
      const thought = thoughts[i];
      const user = usernames[i];
      await Thought.create({
          thoughtText: thought,
          username: user
      });
      await User.findOneAndUpdate(
          { username: user },
          { $push: { thoughts: await Thought.findOne({ username: user }) } },
          { runValidators: true, new: true }
      );
    }

    console.log("Seeding complete! 🌱");
    process.exit(0);
});
