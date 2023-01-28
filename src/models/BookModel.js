import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
   bookTitle:{type:String, required:true},
   author:{type:String,required:true},
   categories:{type:String,required:true}, 
   price:{type:Number,required:true}
})

export const BookModel = new mongoose.model('book',bookSchema) 