import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDb = async() => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI!,{
            dbName: 'tasks'
        })
    }
    catch (e) {
        console.log(e);
    }
}

