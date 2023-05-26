const mongoose= require("mongoose")
const Schema = mongoose.Schema

const reporterSchema = new Schema({
    name:String,
    email:String,
    subject:String,
    message:String
})

const Reporter = mongoose.model("Reporter",reporterSchema)
module.exports = Reporter
