//this file is for routing the url to the controller an method
const dogs = require("./../controllers/dogs");

module.exports = (app) => {
    app.get("/", dogs.index),//display all dogs
    app.get("/dogs/new", dogs.newDog),//display form for new dog
    app.get("/:id", dogs.thisDog),//display info on a dog   
    app.post("/dogs", dogs.create),//action to post new dog info
    app.post("/update", dogs.update),//action to post update dog info
    app.get("/destroy/:id", dogs.delete)//action to delete a dog
}
