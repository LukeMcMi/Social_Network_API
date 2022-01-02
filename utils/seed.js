
const connection = require("../config/connection");
const thoughtController = require("../controllers/thought-controller");
const { Reaction, Thought, User } = require("../models");
const reactionSchema = require("../models/Reactions");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing reactions
  await Reaction.deleteMany({});

  const userData = [
    { username: "Chucky", email: "chucky@gmail.com" },
    { username: "Fred", email: "fkruger@gmail.com" },
    { username: "Michael", email: "mmyers@gmail.com" },
    { username: "Jason", email: "jasonv@gmail.com" },
  ];

  const thoughtData = [
    {
      thoughtText: "Why are people so unkind",
      userName: "Fred",
      reactions: [{ reactionBody: "Here, here", userName: "Michael" }],
    },
    {
      thoughtText: "Wanna Play",
      userName: "Chucky",
      reactions: [
        { reactionBody: "Not today", userName: "Jason" },
        { reactionBody: "anytime", userName: "Michael" },
      ],
    },
    {
      thoughtText:
        "looking forward to halloween",
      userName: "Michael",
      reactions: [],
    },
  ];


  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thought);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});