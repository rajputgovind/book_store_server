import mongoose from "mongoose";

export async function createConnection(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('connection successful....')
    } catch (error) {
        console.log('error in connection......')
        console.log(error)
    }
}
