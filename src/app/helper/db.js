import mongoose from 'mongoose';


export const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);
        console.log("Database connected successfully!");
     
    } catch (error) {
        console.log("Error connecting to the database:", error);
        throw error; // Re-throw the error to propagate it
    }
}