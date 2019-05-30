const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
    title: "La La London",
    author: "Saundra Fernandes",
    synopsis:
      "Walking the streets of London makes me go back 5 centuries.",
    date: new Date(Date.now())
  },
  {
    title: "Mountains of Missisippi",
    author: "Joseph Guardo",
    synopsis:
      "Serenity redefined in the mountains of missisipi",
    date: new Date(Date.now())
  },
  {
    title: "Colors of India",
    author: "Brianna Lasser",
    synopsis:
      "Holi, Diwali, Dussera and Onam... just the beginning of all the wonders in India",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
