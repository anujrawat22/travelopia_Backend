const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    name : {type : String , required : true},
    email : {type : String, required : true},
    destination : {type : String , required : true},
    number_of_travellers : {type : Number , required : true},
    budget_Per_person : {type : Number , required : true},
    total : {type : Number , required : true },
    createdAt : {type : Date , default : Date.now()}
})

const DataModel = mongoose.model("userdata" , dataSchema)

module.exports = { DataModel}