//this is the controller for all things dogs, if another model class was needed using another controller would help keep things readable
const mongoose = require("mongoose");
const Dog = mongoose.model("Dog");

module.exports = {
    index: (req, res) => {
        Dog.find({}, (err, dogsFromDB)=>{
            if(err) {
                console.log(err);
                console.log("1");
            } else {
                console.log(dogsFromDB);
                console.log("2");
                res.render("index", {dogs: dogsFromDB});
            }
        })
        console.log("3");
    },//end of the index route
    newDog: (req, res) => {
        console.log("hitting the newDog method");
        res.render("AddDog");
    },//end of the newDog route
    thisDog: (req, res) => {
        console.log("Hit the thisDog method")
        Dog.find({_id: req.params.id}, function(err, dog){
            if (err){
                console.log("err");
            }else{
                console.log(dog[0].name);
                res.render("ShowDog", {dog: dog});
            }
        });
    },//end of the thisDog route
    create: (req, res) => {
        const dog = new Dog();
        dog.name = req.body.name;
        dog.type = req.body.type;
        dog.desc = req.body.desc;
        dog.age = req.body.age;
        dog.gender = req.body.gender;
        dog.save((err)=>{
            if(err){
                console.log(err);
            }
            res.redirect("/");
        });
    },//end of the create route
    update: (req, res) => {
        console.log("Hitting the update route");
        Dog.update({id: req.body.id}, req.body, function(err, dog){
            if (err){
                console.log("err");
            }else{
                console.log("No errors");
                console.log(dog)
                res.redirect("/");
            }
        });
    },//end of the update method
    delete: (req, res) => {
        console.log("hitting the delete route");
        Dog.remove({_id: req.params.id}, function(err){
            if(err){
                console.log("Cannot delete due to error");
            }else{
                res.redirect('/');
            }
        })
    }
}