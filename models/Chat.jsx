import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    message: {
        type:String,
        required: true,
    },
    reply: {
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    }
})

export const Chat = mongoose.models.chat || mongoose.model("chat", chatSchema);