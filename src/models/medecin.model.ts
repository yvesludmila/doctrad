import mongoose, { Schema } from "mongoose"
const medecineSchema = new Schema(
    {
        Ingredient:String,
        Preparation:String,
        Use:String,
},
{
    timestamps:true,
}
)
const medecins = mongoose.models.medecins || mongoose.model("publication",medecineSchema)
export default medecins;