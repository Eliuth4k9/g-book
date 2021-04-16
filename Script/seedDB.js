const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/booksearch", {
    useNewUrlParser: true,
});

const bookSeed =[
{
    authors: ["Paulo Coelho"],
    description: "Paulo Coelho’s masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.",
    image: "https://www.google.com/books/edition/The_Alchemist_LP/lz-BoS0zjIgC?hl=en&gbpv=1",
    link: "https://www.google.com/books/edition/The_Alchemist_LP/lz-BoS0zjIgC?hl=en&gbpv=0",
    title: "The Alchemist",
},
];


db.Books
    .deleteMany({})
    .then(() => db.Books.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    }); 