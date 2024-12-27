import mongoose from "mongoose"

const ImageSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    data : {
        type : Buffer,
        required : true
    },
    contentType : {
        type : String,
        required :true
    }
})

export const Image = mongoose.models.Image || mongoose.model('Image', ImageSchema)

// if model is already created don't create it again and if it's not created then create a model here we named it "Image" and define it's schema which is ImageSchema in this case