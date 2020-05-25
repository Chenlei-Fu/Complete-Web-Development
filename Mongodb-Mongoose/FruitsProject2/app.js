const mongoose = require('mongoose');

// URL: <server>/<Database, if it doesn't exist a new one will be created>
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "What's the name of the fruit?"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// First Parm: String, singular, name of collection,
// in MongoDB it will be saved all lower case
// Second Parm: Scheme
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great Fruit."
})

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});
const mongo = new Fruit({
    name: "mongo",
    score: 7,
    review: "Good Fruit."
})
// person.save();
Person.updateOne({name: "John"}, {favoriteFruit: mongo}, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log("Successfully updated the document");
    }
})


// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 4,
//     review: "Too sweet for me."
// });
//
// const banana = new Fruit({
//     name: "Banana",
//     rating: 6,
//     review: "Weird texture."
// });
//
// const orange = new Fruit({
//     name: "Orange",
//     rating: 8,
//     review: "Tastes great."
// });

// Fruit.insertMany([banana, kiwi, orange], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved all the fruits");
//   }
// });

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: "5ec9980a8d35c506e678355e"}, {name: "Peach"}, function (err) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully Update");
//     }
// });

// Fruit.deleteOne({name: "Peach"}, function (err) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully Deleted");
//     }
// })

// Person.deleteMany({name: "John"}, function (err) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully Deleted");
//     }
// })