import mongoose from "mongoose"
const connectMongoDB = async () =>{
    try {
       await mongoose.connect("mongodb://localhost:27017/traditional_doctor")
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDB;