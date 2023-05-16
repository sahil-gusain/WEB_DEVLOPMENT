const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main(){// async fun are those which always return something
    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');//can only be used in async
    console.log("connected to the server");
}

const fruitsSchema = new mongoose.Schema({//created the scheme
    name : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        min : 0,
        max : 10
    },
    review : String
});

const Fruits = mongoose.model('fruit', fruitsSchema);//created collection fancy constructor
//that is compiled using schema


// const Avocado = new Fruits({
//     name : "Avocado",
//     rating:7,
//     review : " not bad not bad "
// })

// Avocado.save();

// Fruits.deleteOne({_id : "64632ae204b051bbae217"}).then(function(){
//     console.log("deleted succesfully");
// })
// .catch(function(err){
//     console.log(err);
// }) 
//await keyword makes the function
//stops execution until the promosie is not resolved


// const orange = new Fruits({
//     name : "orange",
//     rating : 8,
//     review : "oj is great youtuber",
// });

// const blueberries = new Fruits({
//     name : "blueberries",
//     rating : 5,
//     review : "makes tongue black",
// });

// const kiwi = new Fruits({
//     name : "kiwi",
//     rating : 7,
//     review : "ammero kae fruits",
// })

// Fruits.find()
//   .then(function(fruit){
//         mongoose.connection.close();
//         fruit.forEach(function(fruit){
//             console.log(fruit.name);
//         })
//     })
//     .catch(function(err){
//         console.log(err);
//     })

// Fruits.insertMany([orange,blueberries,kiwi]).then(function(){
//     console.log("succesfully inserted in the database");
// })

// const fruit = new Fruits({
//     name : "pineapple",
//     rating : 7,
//     review : "idk but looks like marco"
//   });

// fruit.save();


const personScheme = new mongoose.Schema({
    name : String,
    age : Number,
    favouriteFruit : fruitsSchema,
});

const persons = new mongoose.model('person',personScheme);

// const person = new persons({
//     name : "John",
//     age : 49
// });

// person.save();
// const newperson  = new persons({
//     name : "marco",
//     age :22,
//     favouriteFruit : fruit
// })

// newperson.save();
// persons.deleteMany({name : "John"}).then(function(){
//     console.log("delted many john succesfully");
// }).catch(function(err){
//     console.log(err);
// })


const lychee = new Fruits({
    name : "lychee",
    rating : 10,
    review : "op hai zyada hai "

})

lychee.save();

persons.updateMany({name : "John"},{favouriteFruit : lychee}).then(function(){
    console.log("updated");
}).catch(function(err){
    console.log(err);
});


