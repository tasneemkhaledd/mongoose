const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/fruitsdb" , {useNewUrlParser: true});
//console.log(mongoose.version);
//const fruitschema = new mongoose.Schema({
//    name:{
//        type:String,
//        required:[true , "please enter the fruit's name"]
//    },
//    rating:Number,
//    description:String
//});
//const Fruit = mongoose.model("Fruit" , fruitschema);
//
//const fruit = new Fruit({
//    name:"fruit",
//    rating:7,
//    description:"a ruit"
//});
//const kiwi = new Fruit({
//    name:"kiwi" , 
//    rating : 8,
//    description : "nice"
//});
//const orange = new Fruit({
//    name:"orange" , 
//    rating : 8,
//    description : "nice"
//});
//const banana = new Fruit({
//    name:"banana" , 
//    rating : 8,
//    description : "nice"
//});
//const mango = new Fruit({
//    name:"mango",
//    rating:5,
//    description:"nnn"
//
//});
//mango.save();
//
//const newFruits = [kiwi, orange, banana];

//Fruit.insertMany(newFruits)
//.then(function () {
//console.log("Successfully saved defult items to DB");
//})
//.catch(function (err) {
//console.log(err);
//});

//async function myfruits(){
//    const fruits = await Fruit.find({});
//    fruits.forEach(function(fruit) {
//        console.log(fruit);
//    });
//}
//myfruits();
//closing the function to not type ctrl + c everytime
//await mongoose.connection.close();


//const peopleschema = new mongoose.Schema({
    //validating the name property
//    name:String,
//    age :Number,
//    favfruit:fruitschema,
//});
//const People = mongoose.model("People" , peopleschema);
//const people = new People ({
//    name:"john",
//    age:16
//});
//const amy = new People({
//    name:"Amy",
//    age:12,
//    favfruit: mango,
//});
//amy.save();
//people.save();

//Fruit.insertMany([kiwi , orange , banana]);


//fruit.save();
//Fruit.updateMany({name:"kiwi"} , {name:"Peach"});
const actorsschema = new mongoose.Schema({
    
    name:{
        type:String,
        required:[true , "please enter the fruit's name"]
    },
    age:{
        type:Number
    },
});
const Actor = mongoose.model("Actor" , actorsschema);

const actor = new Actor({
    
    name:"njnnjn",
    age:17
});
const actress = new Actor({
    
    name:"actress",
    age:18
});
const chris = new Actor({
    
    name:"chris",
    age:19
});
const newactors = [actor, actress, chris];

//Actor.insertMany(newactors)
//.then(function () {
//console.log("Successfully saved defult items to DB actors");
//})
//.catch(function (err) {
//console.log(err);
//});
const Actors = mongoose.model("Actors" , actorsschema);

const wahed = new Actors({
    
    name:"njnnjn",
    age:17
});
const wahda = new Actors({
    
    name:"actress",
    age:18
});
const evans = new Actors({
    
    name:"chris",
    age:19
});
const news = [wahed, wahda, evans];

//Actors.insertMany(news)
//.then(function () {
//console.log("Successfully saved defult items to DB actors");
//})
//.catch(function (err) {
//console.log(err);
//});
//Actors.updateOne({"age":17 } , {$set:{"name":"kareem"},});
 //Fruit.deleteMany({ name:"kiwi" }).then(function(err){
 //   if(err) {
 //       console.log("error here");
 //   }
 //   else{
 //       console.log("success");
 //   }
 //});
 