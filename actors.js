const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/actorsdb" , {useNewUrlParser: true});
const productschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "please enter the fruit's name"]
    },
    age:Number,
});
const Product = mongoose.model("Product" , productschema);

const pen = new Product({
    name:"pen",
    age:7,
});
const pencil = new Product({
    name:"pencil",
    age:4,
});
const rubber = new Product({
    name:"rubber",
    age:11,
});
const newProducts = [pen, pencil, rubber];

//Product.insertMany(newProducts)
//.then(function () {
//console.log("Successfully saved defult items to DB");
//})
//.catch(function (err) {
//console.log(err);
//});
const record =  Product.find({"name":"pen"});
Product.deleteMany({record}).then(function(err){
    if(err){
        console.log("error");
    }
    else{
        console.log("success");
    }
});