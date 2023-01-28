import express from 'express'
import { deleteBook, editBookDetail, fetchAllBooks, saveBook } from '../controllers/BookController.js'

const bookRouter= express.Router()


bookRouter.post('/books',saveBook)
bookRouter.get('/books',fetchAllBooks)
bookRouter.put('/books/:id',editBookDetail)
bookRouter.delete('/books/:id',deleteBook)

export default bookRouter;