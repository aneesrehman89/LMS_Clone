import mongoose from "mongoose";

const dbconnection = async ()=>{
    try {
          await mongoose.connect(process.env.MONGO_URL);
          console.log('Mongo connected successfully');
          
    } catch (error) {
        console.log('error occured', error);
    }
}

export default dbconnection