const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"]}, 
    desc: {type: String, required: [true, "Desc field is required"]},
    type: {type: String, required: [true, "Type is required"]},
    age: {type: Number, required: [true, "Age is required"]},
    gender: {type: String, required: [true, "Gender is required"]}
   }, {timestamps: true})

mongoose.model('Dog', DogSchema);