import { BookModel } from "../models/BookModel.js";
import { StatusCodes } from "http-status-codes";

export async function saveBook(req,res){
    try {
        const book = BookModel(req.body)
        const savedBook = await book.save()
        res.status(StatusCodes.CREATED).json(savedBook)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in save books"})
    }
}

export async function fetchAllBooks(req,res){
    try {
        const books= await BookModel.find()
        res.status(StatusCodes.OK).json(books)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in fetching data"})
    }

}

export async function editBookDetail(req,res){
    try {
        const book = await BookModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(StatusCodes.OK).json(book)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in updating data"})

    }
}

export async function deleteBook(req,res){
    try {
        await BookModel.findByIdAndDelete(req.params.id)
        res.status(StatusCodes.NO_CONTENT).json()
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in deleting book detail"})
    }
}