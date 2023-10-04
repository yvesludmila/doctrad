import mongoose from "mongoose"
const connectMongoDB = async () =>{
    try {
       await mongoose.connect("mongodb://127.0.0.1/traditional_doctor")
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDB;