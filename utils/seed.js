[

]

const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = await User.insertMany([
          {
            username: "lernantino",
            email: "lernantino@gmail.com"
          },
          {
            username: "codingmaster",
            email: "codingmaster@example.com"
          },
          {
            username: "techgeek123",
            email: "techgeek123@gmail.com"
          },
          {
            username: "designguru",
            email: "designguru@example.com"
          },
          {
            username: "gamer123",
            email: "gamer123@gmail.com"
          },
          {
            username: "webdevpro",
            email: "webdevpro@example.com"
          },
          {
            username: "musiclover22",
            email: "musiclover22@gmail.com"
          },
          {
            username: "fitnessfanatic",
            email: "fitnessfanatic@example.com"
          },
          {
            username: "bookworm99",
            email: "bookworm99@gmail.com"
          },
          {
            username: "travelbug45",
            email: "travelbug45@example.com"
          }
    ]);

    const thoughts = await Thought.insertMany([
        {
            thoughtText: "Here's a cool thought...",
            username: "lernantino"
        },
        {
            thoughtText: "I like to code",
            username: "codingmaster"
        },
        {
            thoughtText: "I like technology",
            username: "techgeek123"
        },
        {
            thoughtText: "I like to design things",
            username: "designguru"
        },
        {
            thoughtText: "I like to play video games",
            username: "gamer123"
        },
        {
            thoughtText: "I like to develop websites",
            username: "webdevpro"
        },
        {
            thoughtText: "I like to listen to music",
            username: "musiclover22"
        },
        {
            thoughtText: "I like to workout",
            username: "fitnessfanatic"
        },
        {
            thoughtText: "I like to read books",
            username: "bookworm99"
        },
        {
            thoughtText: "I like to travel",
            username: "travelbug45"
        }
    ]);

    console.log("Seeding complete! 🌱");
    process.exit(0);
});
